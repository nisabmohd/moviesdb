import React from 'react'
import '../css/Search.css'
export const Searchbar = () => {
    return (
        <div className='searchbar'>
            <input type="text" placeholder='Enter Movie/TV Name ' />
            <button>Search</button>
        </div>
    )
}
