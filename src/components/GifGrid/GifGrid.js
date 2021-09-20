import React from 'react'
import './styles.css'
import { Grid } from '@giphy/react-components'
import { useStateContext } from '../../lib/stateStore'
import { GiphyFetch } from '@giphy/js-fetch-api'

const GifGrid = () => {
    const { searchTerm } = useStateContext()
    const gifs = new GiphyFetch('k7v4lx1DZsjmqQer1jqBnsOP8ULMS6Vj');

    const fetchFunction = (offset) => gifs.trending({ offset, limit: 10 })
    const searchFunction = (offset) => gifs.search(searchTerm, { offset, limit: 10 })

    return (
        <div className='gif-container'>
            {searchTerm ?
                <Grid width={800} columns={3} fetchGifs={searchFunction} key={searchTerm} />
                :
                <Grid width={800} columns={3} fetchGifs={fetchFunction} />
            }
        </div>
    )
}

export default GifGrid
