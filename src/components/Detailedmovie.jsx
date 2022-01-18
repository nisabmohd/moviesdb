import React, { useState } from 'react'
import { useEffect } from 'react'
import data from '../Fetch'
import apikey from '../apikey'
import '../css/details.css'
export const Detailedmovie = () => {
    const [details, setDetails] = useState('');
    useEffect(() => {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        console.log(id);
        const cat = urlParams.get('cat')
        console.log(cat);
        async function getdetails() {
            const resp = await data(`https://api.themoviedb.org/3/${cat}/${id}?api_key=${apikey}&language=en-US`)
            console.log(resp);
            setDetails(resp)
        }
        getdetails();
    }, [])
    return (
        <div className='detailspage'>
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="" />
            </div>
            <div className="details">
                <h5>{details.original_title || details.original_name}</h5>
                <p>{details.release_date || details.first_air_date}</p>
                <p>{details.overview}</p>
                <p>Lanuage : {details.original_language}</p>
            </div>
        </div>
    )
}
