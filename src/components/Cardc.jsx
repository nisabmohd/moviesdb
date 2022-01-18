import React from 'react'
import '../css/card.css'
import { Link } from 'react-router-dom';
export const Cardc = (props) => {
    return (
        <div className='card'>
            <Link to={"/details?id=" + props.id + "&cat=" + props.cat}><img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="" /></Link>
            {/* <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="" /> */}
            <div className='ratings_circle'><p >{props.ratings * 10}%</p></div>
            <h5>{props.title}</h5>
            <p className='carddate'>{props.date}</p>
        </div>
    )
}
