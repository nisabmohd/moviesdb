import React from 'react'
import { useEffect, useState } from 'react'
import apikey from '../apikey'
import data from '../Fetch'
import Paginationc from './Paginationc';
import { Discovercard } from './Discovercard';
import '../css/discover.css'
export const Discoverpage = ({ cat, endpoint, header }) => {
    const [moviedata, setMoviedata] = useState([])
    const [page, setPage] = useState(1)
    const [totalpages, setTotalpages] = useState(0)
    function next() {
        setPage(page + 1)
        window.scroll(0, 0)
    }
    function prev() {
        setPage(page - 1)
        window.scroll(0, 0)
    }
    useEffect(() => {
        document.title=header
        const func = async () => {
            const tempresp = await data(`https://api.themoviedb.org/3/${cat}/${endpoint}?api_key=${apikey}&language=en-US&page=${page}`)
            console.log(tempresp);
            setMoviedata(tempresp.results)
            setTotalpages(tempresp.total_pages)
        }
        func()
    }, [page,cat,endpoint,header])
    return (
        <div className='popular'>
            <div className="griddisc">
                {
                    moviedata.map((item) => {
                        return (
                            <Discovercard title={item.original_title || item.original_name} img={item.poster_path} date={item.first_air_date || item.release_date} />
                        )
                    })
                }
            </div>
            <Paginationc page={page} total={totalpages} nfunc={next} pfunc={prev} />
        </div>
    )
}
