import React from 'react'
import { Searchbar } from './Searchbar';
import data from '../Fetch';
import '../css/searchpage.css'
import { useState ,useEffect} from 'react';
import apikey from '../apikey';
import { Searchres } from './Searchres';
import Paginationc from './Paginationc';

export const Searchpage = () => {
    const [keyword,setKeyword]=useState(null)
    const [searchres,setSearchres]=useState(null) 
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
        gettingkeyword(keyword)
        return keyword
    }, [keyword])
    async function gettingkeyword(a){
        setKeyword(a)
        const resp=await data(`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=en-US&query=${a}&page=${page}&include_adult=false`)
        setSearchres(resp.results);
        setTotalpages(resp.total_pages)
    }
    return (
        <>
            <div className="seachpage">
                <Searchbar getkeyword={gettingkeyword}></Searchbar>
                    {
                        (keyword===null || searchres===null || searchres===undefined)?(<h6 style={{marginTop:'29px'}}>No results found ...</h6>):(
                            <>
                            <Searchres data={searchres}/>
                            </>
                        )
                    }
            </div>
            <Paginationc dis={disabled} page={page} total={totalpages} nfunc={next} pfunc={prev} />
        </>
    )
}