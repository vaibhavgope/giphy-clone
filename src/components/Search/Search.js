import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useStateContext } from '../../lib/stateStore'
import './styles.css'

const Search = (props) => {
    const { searchTerm, setSearchTerm } = useStateContext();
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(value)
        props.history.push(`/search/${searchTerm}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            handleSubmit(e)
    }

    return (
        <div className='search-container'>
            <label htmlFor="search-bar">Search gifs</label>
            <input
                type="search"
                id='search-bar'
                placeholder='search for gifs'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button type='submit' onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default withRouter(Search)
