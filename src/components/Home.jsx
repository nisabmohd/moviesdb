import React, { useState } from 'react'
import data from '../Fetch';
import { useEffect } from 'react'
import { Cardc } from './Cardc';
import '../css/Home.css'
import { Searchbar } from './Searchbar';
export const Home = (props) => {
    const [moviedata, setMoviedata] = useState([])
    const [top,setTop]=useState([])
    useEffect(() => {
        const func = async () => {
            const tempresp = await data(`https://api.themoviedb.org/3/movie/popular?api_key=dce7f57eb9dcdb2e48cff0621e2c5035&language=en-US&page=${props.page}`)
            setMoviedata(tempresp.results)
            const top=await data(`https://api.themoviedb.org/3/movie/top_rated?api_key=dce7f57eb9dcdb2e48cff0621e2c5035&language=en-US&${props.page}`)
            setTop(top.results)
        }
        func()
    }, [props.page])
    return (

        <>
        <Searchbar/>
            <div className='container_custom spaceabove'>
                <h4 className='top_headlines'>What's Popular</h4>
                <div className="grid_custom">
                    {
                        moviedata.map((item) => {
                            return (
                                <Cardc title={item.original_title} image={item.poster_path} desc={item.overview} date={item.release_date} ratings={item.vote_average} />
                            )
                        })
                    }
                </div>
            </div>


            <div className='container_custom spaceabove'>
                <h4 className='top_headlines'>Top Rated</h4>
                <div className="grid_custom">
                    {
                        top.map((item) => {
                            return (
                                <Cardc title={item.original_title} image={item.poster_path} desc={item.overview} date={item.release_date} ratings={item.vote_average} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}