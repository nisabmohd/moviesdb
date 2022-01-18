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
    const [disabled,setDisabled]=useState(true)
    const [totalpages, setTotalpages] = useState(0)
    function next() {
        if(page<=totalpages-1){
            setPage(page + 1)
            window.scroll(0, 0)
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    function prev() {
        if (page!==0 && page>=2 ) {
            setPage(page - 1)
            window.scroll(0, 0)
            setDisabled(true)
        }
        else{
            setDisabled(true)
        }
    }
    useEffect(() => {
        document.title = header
        const func = async () => {
            const tempresp = await data(`https://api.themoviedb.org/3/${cat}/${endpoint}?api_key=${apikey}&language=en-US&page=${page}`)
            console.log(tempresp);
            setMoviedata(tempresp.results)
            setTotalpages(tempresp.total_pages)
        }
        func()
    }, [page, cat, endpoint, header])
    return (
        <div className='popular'>
            <h5 style={{ marginTop: '35px' }}>Showing Results For : {header}</h5>
            <div className="griddisc">
                {
                    moviedata.map((item) => {
                        return (
                            <Discovercard cat={cat} title={item.original_title || item.original_name} img={item.poster_path} date={item.first_air_date || item.release_date} id={item.id} />
                        )
                    })
                }
            </div>
            <Paginationc dis={disabled} page={page} total={totalpages} nfunc={next} pfunc={prev} />
        </div>
    )
}
