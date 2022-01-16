import React from 'react'
import { useEffect,useState } from 'react'
import apikey from '../apikey'
import data from '../Fetch'
import Paginationc from '../components/Paginationc';

export const PopularMovies = ({cat}) => {
    const [moviedata, setMoviedata] = useState([])
    useEffect(() => {
        const func = async () => {
            const tempresp = await data(`https://api.themoviedb.org/3/${cat}/popular?api_key=${apikey}&language=en-US&page=1`)
            console.log(tempresp);
            setMoviedata(tempresp.results)
        }
        func()
    }, [cat])
    return (
        <div className='popular'>
            {
                moviedata.map((item)=>{
                    return (
                        <h1>{item.original_title}</h1>
                    )
                })
            }
        <Paginationc page={21} />

        </div>
    )
}
