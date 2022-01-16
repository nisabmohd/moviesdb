import React from 'react'
import { useEffect,useState } from 'react'
import apikey from '../apikey'
import data from '../Fetch'
import Paginationc from '../components/Paginationc';
export const Nowmovies = ({cat}) => {
    const [nowplaying,setNowplaying]=useState([])
    useEffect(() => {
        const func = async () => {
            const now=await data(`https://api.themoviedb.org/3/${cat}/now_playing?api_key=${apikey}&language=en-US&page=1`)
            setNowplaying(now.results)
        }
        func()
    }, [cat])
    return (
        <div className='nowmovies'>
             {
                nowplaying.map((item)=>{
                    return (
                        <h1>{item.original_title}</h1>
                    )
                })
            }
        <Paginationc page={56} />
        </div>
    )
}
