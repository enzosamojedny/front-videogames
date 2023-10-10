import { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import RatingStars from '../ratingStars/RatingStars'
import './cardDetail.css'
import Loader from '../loader/Loader' //? ADD LOADER TO DETAIL PAGE

function CardDetail({ props }) {
    useEffect(() => {
        document.body.classList.add('card-detail');
        return () => {
            document.body.classList.remove('card-detail');
        };
    }, []);
    const { name, genres, background_image, description, platforms, released, rating, ratings_count } = props
    return (
        <>
            <Navbar />
            <div className='detail-whole-container'>
                <div className='detail-container'>
                    <h1 className='detail-title'>{name}</h1>
                    <img src={background_image} alt={name} className='detail-image' />
                    <div className='description-container'>
                        <p className='detail-description'>{description}</p>
                    </div>
                    <div className='genre-container'>
                        {genres?.map((genre, index) =>
                            <p className='genre-p' key={index}>{genre}</p>
                        )}
                    </div>
                    <div>
                        {platforms?.map((platform, index) => {
                            return (
                                <p key={index} style={{ color: 'white' }}>Platforms: {platform}</p>
                            )
                        })}
                    </div>
                    <p className='released'>Release date: {released}</p>
                    <p className='rating'>{rating}</p>
                    <p className='ratings-count'>{ratings_count}</p>
                    <RatingStars games={props} />
                </div>
            </div >
        </>
    )
}

export default CardDetail
