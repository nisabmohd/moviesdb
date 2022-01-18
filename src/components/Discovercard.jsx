import React from 'react'
import '../css/discover.css'
import { Link } from 'react-router-dom';
export const Discovercard = (props) => {
    return (
        <div className='discovercard'>
            <Link to={"/details?id="+props.id+"&cat="+props.cat}><img src={`https://image.tmdb.org/t/p/original${props.img}`} alt="" /></Link>
            <h5>{props.title}</h5>
            <p>{props.date}</p>
        </div>
    )
}
