import React from 'react';
import './error.css';
import { NavLink } from 'react-router-dom';
function Error() {
    return (
        <div className="error-container">
            <div>
                <NavLink to={'/home'}><button className="error-button">Go back</button></NavLink>
                <h1 className="error-heading">404 Not Found</h1>
                <img src="../../../404.png" alt="" className="error-image" />
            </div>
        </div>
    )
}

export default Error;
