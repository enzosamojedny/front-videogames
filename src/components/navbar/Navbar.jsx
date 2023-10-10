import Logo from '../../components/logo/Logo'
import SearchBar from './SearchBar';
import React, { useState, useEffect } from 'react';
import './navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/home');
    };
    const [opacity, setOpacity] = useState(1);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 90000;
            const newOpacity = Math.max(0.3, 1 - (scrollPosition / maxScroll));
            setOpacity(newOpacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="navbar-container" style={{ opacity }}>
            <button className='navbar-logo' onClick={handleButtonClick}><Logo /><p className='navbar-p'>RB</p></button>
            <NavLink to={'/createVideogame'}><button className='navbar-btn'>Create Videogame</button></NavLink>
            <SearchBar />
        </div>
    )
}

export default Navbar