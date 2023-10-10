import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllVideogames } from '../../redux/actions.js'
import CardListContainer from '../cards/CardListContainer.jsx'
import Loader from "../loader/Loader";
import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/Footer.jsx';
import './home.css'
import Pagination from '../pagination/Pagination.jsx';
import Filter from '../filters/Filter.jsx';

function Home() {
    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames)

    const [loading, setLoading] = useState(true);
    const [gamesPerPage, setGamesPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)

    const max = videogames.length / gamesPerPage
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    useEffect(() => {
        let timeoutId;
        dispatch(getAllVideogames())
            .then(() => {
                timeoutId = setTimeout(() => setLoading(false), 0);
            })
            .catch(() => {
                timeoutId = setTimeout(() => setLoading(false), 0);
            });

        return () => clearTimeout(timeoutId);
    }, [])
    return (
        <>
            <button style={{ backgroundColor: 'white', padding: '300' }}></button>
            <div className='home-container'>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Navbar />
                        <Filter />
                        {videogames?.slice((currentPage - 1) * gamesPerPage, (currentPage - 1) * gamesPerPage + gamesPerPage).map(({ id, name, background_image, genres, released, rating, ratings_count }) => {
                            return (
                                <div style={{ display: 'inline-flex', marginLeft: '75px', marginTop: '50px' }} key={id}>
                                    <CardListContainer
                                        id={id}
                                        name={name}
                                        background_image={background_image}
                                        genres={genres}
                                        released={released}
                                        rating={rating}
                                        ratings_count={ratings_count}
                                    />
                                </div>
                            );
                        })}
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
                        <Footer />
                    </>

                )}
            </div>

        </>
    );
}


export default Home;
