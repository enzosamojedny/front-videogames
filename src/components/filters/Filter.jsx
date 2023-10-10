import React, { useState } from 'react'
import { updateFilter, reset } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './filter.css'
function Filter() {
    const dispatch = useDispatch()
    const [rating, setRating] = useState('')
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [idFilter, setIdFilter] = useState('')
    function handleSort(event) {
        const selectedSort = event.target.value;
        setSort(selectedSort)
        dispatch(updateFilter({ filterType: 'sort', value: selectedSort }));
    }

    function handleGenre(event) {
        const selectedGenre = event.target.value;
        setFilter(selectedGenre)
        dispatch(updateFilter({ filterType: 'genre', value: selectedGenre }));
    }

    function handleRating(event) {
        const selectedRating = event.target.value;
        setRating(selectedRating)
        dispatch(updateFilter({ filterType: 'rating', value: event.target.value }));
    }
    function handleReset(event) {
        dispatch(reset(event.target.value))
    }
    function handleIDFilter(event) {
        const selectedID = event.target.value;
        setIdFilter(selectedID)
        dispatch(updateFilter({ filterType: 'source', value: selectedID }));
    }
    return (
        <div>
            <select onChange={handleGenre} value={filter}>
                <option value="">Filter by genre</option>
                <option value="Action" >Action</option>
                <option value="RPG" >RPG</option>
                <option value="Puzzle" >Puzzle</option>
                <option value="Indie" >Indie</option>
                <option value="Sports" >Sports</option>
                <option value="Adventure" >Adventure</option>
                <option value="Shooter" >Shooter</option>
                <option value="Massively Multiplayer" >Massively Multiplayer</option>
                <option value="Platformer" >Platformer</option>
                <option value="Arcade" >Arcade</option>
                <option value="Educational" >Educational</option>
                <option value="Board Games" >Board Games</option>
                <option value="Fighting" >Fighting</option>
                <option value="Card" >Card</option>
                <option value="Strategy" >Strategy</option>
                <option value="Casual" >Casual</option>
                <option value="Simulation" >Simulation</option>
                <option value="Racing" >Racing</option>
                <option value="Family" >Family</option>
            </select>

            <select onChange={handleSort} value={sort}>
                <option value=''>Sort by name</option>
                <option value="AscSort">Ascending</option>
                <option value="DescSort">Descending</option>
            </select>
            <select onChange={handleRating} value={rating}>
                <option value=''>Sort by Rating</option>
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>
            <select onChange={handleIDFilter} value={idFilter}>
                <option value="">Filter by ID</option>
                <option value="DB">DB</option>
                <option value="API">API</option>
            </select>
            <button onClick={handleReset} className='bn3'>Reset</button>
        </div>
    )
}

export default Filter