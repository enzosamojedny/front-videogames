import React, { useEffect, useState } from 'react'
import './form.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { createVideogame } from '../../redux/actions'
import validation from './helpers/validation'
import Loader from '../loader/Loader'
import CustomPopup from '../popup/Popup'
import { NavLink } from 'react-router-dom'

function Form() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const { videogames } = useSelector((state) => state)
    const [visibility, setVisibility] = useState(false);
    useEffect(() => {
        document.body.classList.add('create-page');
        return () => {
            document.body.classList.remove('create-page');
        };

    }, []);
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    const [input, setInput] = useState({
        name: '',
        background_image: '',
        description: '',
        platforms: [],
        released: '',
        rating: '',
        genres: []
    })
    const [error, setError] = useState({
        name: '',
        background_image: '',
        description: '',
        platforms: '',
        released: '',
        rating: '',
        genres: ''
    })
    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                setInput(prev => ({ ...prev, [name]: [...prev[name], value] }));
            } else {
                setInput(prev => ({ ...prev, [name]: prev[name].filter(item => item !== value) }));
            }
        } else {
            setInput(prev => ({ ...prev, [name]: value }));
        }
        setError(validation({
            ...input,
            [name]: value
        }))
    }



    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormInvalid()) {
            alert('Tu formulario está incompleto, por favor llena todos los campos');
        } else {
            setLoading(true);
            dispatch(createVideogame(input))
                .then(() => {
                    setVisibility(true);
                    setInput({
                        name: '',
                        background_image: '',
                        description: '',
                        genres: '',
                        platforms: '',
                        rating: '',
                        released: ''
                    });
                })
                .catch((error) => {
                    setLoading(false);
                });
        }
    }

    const isFormInvalid = () => {
        return Object.values(input).some((value) => value === '');
    };

    return (
        <div>
            <div className='form-container'>
                <Navbar />
                <div className='form-wrapper' >
                    <label htmlFor="name"></label>
                    <input type="text" placeholder='Name' name='name' value={input.name} onChange={handleChange} className='form-input' />
                    {error.name && <p style={{ color: 'white' }}>{error.name}</p>}
                    <label htmlFor="background_image"></label>
                    <input type="url" placeholder='Image url' name='background_image' value={input.background_image} onChange={handleChange} className='form-input' />
                    {error.background_image && <p style={{ color: 'white' }}>{error.background_image}</p>}
                    <label htmlFor="description"></label>
                    <input type="text" placeholder='Description' name='description' value={input.description} onChange={handleChange} className='form-input' />
                    {error.description && <p style={{ color: 'white' }}>{error.description}</p>}
                    <label htmlFor="released"></label>
                    <input type="date" placeholder='released' name='released' value={input.released} onChange={handleChange} className='form-input' />
                    {error.released && <p style={{ color: 'white' }}>{error.released}</p>}
                    <label htmlFor="rating"></label>
                    <input type="text" placeholder='Rating' name='rating' value={input.rating} onChange={handleChange} className='form-input' />
                    {error.rating && <p style={{ color: 'white' }}>{error.rating}</p>}
                </div>
                <div className="checkbox-whole-container">
                    {[...new Set(videogames?.flatMap(game => game.genres))].map((genre, index) => (
                        <div key={index} className="checkbox-container">
                            <input
                                type="checkbox"
                                id={genre}
                                name='genres'
                                value={genre}
                                onChange={handleChange}
                                checked={input.genres.includes(genre)}
                            />
                            <label htmlFor={genre}>{genre}</label>
                            {error.genres && <p style={{ color: 'white' }}>{error.genres}</p>}
                        </div>
                    ))}
                </div>
                <div className="checkbox-whole-container">
                    {[...new Set(videogames?.flatMap(game => game.platforms))].map((platform, index) => (
                        <div key={index} className="checkbox-container">
                            <input
                                type="checkbox"
                                id={platform}
                                name='platforms'
                                value={platform}
                                onChange={handleChange}
                                checked={input.platforms.includes(platform)}
                            />
                            <label htmlFor={platform}>{platform}</label>
                        </div>
                    ))}
                    {error.platforms && <p style={{ color: 'white' }}>{error.platforms}</p>}
                </div>
                <button type='submit' className='bn3' onClick={(e) => { handleSubmit(e); setVisibility(!visibility); }}>CREATE VIDEOGAME</button>

                <CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                    title="Your videogame has been created"
                >
                    <h3>Click to go <NavLink to={'/home'}>back</NavLink></h3>
                </CustomPopup>
            </div>
            <Footer />
        </div>
    )
}

export default Form