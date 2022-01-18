import React from 'react'
import '../css/card.css'
export const Cardc = (props) => {
    return (
        <div className='card'>
            <a href={"/details?id=" + props.id + "&cat=" + props.cat}><img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="" /></a>
            {/* <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="" /> */}
            <div className='ratings_circle'><p >{props.ratings * 10}%</p></div>
            <h5>{props.title}</h5>
            <p className='carddate'>{props.date}</p>
        </div>
    )
}
