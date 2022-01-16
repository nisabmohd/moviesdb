import React from 'react'
import { Searchbar } from './Searchbar';
import data from '../Fetch';
import '../css/searchpage.css'
import { useState ,useEffect} from 'react';
import apikey from '../apikey';
import { Searchres } from './Searchres';
export const Searchpage = () => {
    const [keyword,setKeyword]=useState(null)
    const [searchres,setSearchres]=useState(null)
    useEffect(() => {
        gettingkeyword(keyword)
        return keyword
    }, [keyword])
    async function gettingkeyword(a){
        setKeyword(a)
        const resp=await data(`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=en-US&query=${a}&page=1&include_adult=false`)
        setSearchres(resp.results);
        console.log(resp.results);
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
        </>
    )
}