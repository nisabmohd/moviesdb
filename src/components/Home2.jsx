import React from 'react'
import data from '../Fetch';
import { useEffect, useState } from 'react'
import { Cardc } from './Cardc';
import '../css/Home.css'
import apikey from '../apikey' 
import { Link } from 'react-router-dom';
import next from '../ico/next.png'
export const Home2 = (props) => {
    const [moviedata, setMoviedata] = useState([])
    const [top, setTop] = useState([])
    useEffect(() => {
        document.title="TV Series"
        const func = async () => {
            const tempresp = await data(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`)
            setMoviedata(tempresp.results)
            const top = await data(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`)
            setTop(top.results)

        }
        func()
    }, [])
    return (

        <>
            <div className="homecontainer">

            <div className="headerclassofhome"><Link to="/tv/populartv"><h4 className='top_headlines'>What's Popular on TV Shows</h4> </Link>
                    <img style={{ width: '15px', height: '15px', marginTop:'8px' }} src={next} alt="" />
                </div>
                <div className='container_custom spaceabove'>
                    <div className="grid_custom">
                        {
                            moviedata.map((item) => {
                                return (
                                    <Cardc id={item.id} cat="tv" title={item.original_name} image={item.poster_path} desc={item.overview} date={item.first_air_date} ratings={item.vote_average} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="headerclassofhome"><Link to="/tv/toptv"><h4 className='top_headlines'>Top Rated TV Shows</h4> </Link>
                    <img style={{ width: '15px', height: '15px', marginTop:'8px' }} src={next} alt="" />
                </div>
                <div className='container_custom spaceabove'>
                    <div className="grid_custom">
                        {
                            top.map((item) => {
                                return (
                                    <Cardc id={item.id} cat="tv" title={item.original_name} image={item.poster_path} desc={item.overview} date={item.first_air_date} ratings={item.vote_average} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
