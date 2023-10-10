import { NavLink } from 'react-router-dom'
import './card.css'

function Card({ games }) {
    return (
        <>
            <NavLink to={`/detail/${games.id}`}>
                <button>
                    <div className="card-container">
                        <h1 className="card-h1">{games.name}</h1>
                        <img src={games.background_image} className='card-image' alt={games.name}></img>
                        <div className='genre-container'>
                            {games.genres.map((genre, index) =>
                                <p className='genre-p' style={{ fontSize: '0.9rem', padding: '3px' }} key={index}>{genre}</p>
                            )}
                        </div>
                    </div>
                </button>
            </NavLink>

        </>
    )
}

export default Card;
