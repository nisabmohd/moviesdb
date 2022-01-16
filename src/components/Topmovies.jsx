import React from 'react'
import { useEffect,useState } from 'react'
import apikey from '../apikey'
import data from '../Fetch'
import Paginationc from '../components/Paginationc';
export const Topmovies = ({cat}) => {
    const [top, setTop] = useState([])
    useEffect(() => {
        const func = async (props) => {
            const top = await data(`https://api.themoviedb.org/3/${cat}/top_rated?api_key=${apikey}&language=en-US&page=1`)
            setTop(top.results)
        }
        func()
    }, [cat])
    return (
        <div className='topmovies'>
            {
                top.map((item)=>{
                    return (
                        <h1>{item.original_title}</h1>
                    )
                })
            }
        <Paginationc page={12} />
            
        </div>
    )
}
