import { NavLink } from 'react-router-dom'
import './landing.css'
import { useEffect } from 'react'

function Landing() {
    useEffect(() => {
        document.body.classList.add('landing-page');
        return () => {
            document.body.classList.remove('landing-page');
        };
    }, []);
    return (
        <>

            <div className="landing-container" style={{ backgroundColor: 'black' }}>
                <div className='container'>
                    <h1 className='landing-h1'>Browse games faster than ever</h1>
                    <h2 className='landing-h2'>Take control of Orb Interactive powerful engine to render every videogame you can wish</h2>
                    <NavLink to={'/home'}><button className='bn3'>Join us</button></NavLink>
                </div>
            </div>
        </>

    )
}

export default Landing