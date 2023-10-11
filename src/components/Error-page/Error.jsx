import React from 'react';
import './error.css';

function Error() {
    return (
        <div className="error-container">
            <div>
                <h1 className="error-heading">404 Not Found</h1>
                <img src="../../../404.png" alt="" className="error-image" />
            </div>
        </div>
    )
}

export default Error;
