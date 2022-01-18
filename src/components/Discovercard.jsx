import React from 'react'
import '../css/discover.css'
export const Discovercard = (props) => {
    return (
        <div className='discovercard'>
            <a href={"/details?id="+props.id+"&cat="+props.cat}><img src={`https://image.tmdb.org/t/p/original${props.img}`} alt="" /></a>
            <h5>{props.title}</h5>
            <p>{props.date}</p>
        </div>
    )
}
