import React from 'react';
import './ratingStars.css';

function RatingStars({ games }) {
    const { rating, ratings_count } = games;

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const stars = [];
    for (let i = 0; i < 5; i++) {
        const starValue = i + 1;
        const filledStar = starValue <= Math.round(rating);
        stars.push(
            <span key={starValue} className={filledStar ? 'star filled' : 'star empty'}>
                ★
            </span>
        );
    }

    return (
        <div>
            <div className="stars">{stars}</div>
            <div className="rating-label">{labels[Math.floor(rating)]}</div>
            <div className="ratings-count">{ratings_count} votes</div>
        </div>
    );
}

export default RatingStars;
