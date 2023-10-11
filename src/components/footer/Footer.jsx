import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-whole-wrapper'>
            <div className='footer-wrapper'>
                <div className='content-wrapper'>
                    <NavLink to={'https://github.com/enzosamojedny'} target="_blank">
                        <img className='img' src="https://github.com/fluidicon.png" alt="Git hub" />
                    </NavLink>
                    <p style={{ color: 'white' }}>Developed by Enzo Samojedny</p>
                </div>
            </div>
        </div>
    )
}

export default Footer