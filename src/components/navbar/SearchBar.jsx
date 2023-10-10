import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getVideogameName } from '../../redux/actions.js'
import './searchbar.css'

function SearchBar() {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { videogameName } = useSelector((state) => state)
    const [searchInput, setSearchInput] = useState(name || '');

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getVideogameName(searchInput))
            .finally(() => setLoading(false));
    }
    const handleSearchFocus = () => {
        disableBodyScroll();
    };

    const handleSearchBlur = () => {
        enableBodyScroll();
    };

    const disableBodyScroll = () => {
        document.body.classList.add('no-scroll');
    };

    const enableBodyScroll = () => {
        document.body.classList.remove('no-scroll');
    };
    function shouldHideSearchBar() {
        if (!videogameName) {
            return searchContent.length === 0;
        }
        return false;
    }
    return (
        <div>
            <form className='searchbar-container'>
                <input type="search" className='navbar-searchbar' placeholder='Browse...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
                <button className='bn3' onClick={handleClick} type='submit'>Search</button>
            </form>
            <div className='navbar-wrapper'>
                {videogameName && (
                    <div className='navbar-item-container'>
                        {videogameName.map((game) => (
                            <div key={game.id} className='parent-container'>
                                <NavLink to={`/detail/${game.id}`}>
                                    <div className={shouldHideSearchBar() ? 'searchbar-wrapper hidden' : 'searchbar-wrapper'}>
                                        <div className='game-wrapper'>
                                            <img src={game.background_image} style={{ width: '80px' }} alt='Game' />
                                            <h5>{game.name}</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))}

                    </div>
                )}
            </div>

        </div>
    )
}

export default SearchBar;
