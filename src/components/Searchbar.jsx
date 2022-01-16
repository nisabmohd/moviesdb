import React from 'react'
import '../css/Search.css'
import { useState } from 'react'
export const Searchbar = (props) => {
    const [val,setVal]=useState('a')
    function handleinput(e){
     setVal(e.target.value)
     props.getkeyword(e.target.value)
    }
    return (
        <div className='searchbar'>
            <input type="text" placeholder='Enter Movie/TV Name ' onChange={handleinput} />
            <button disabled="true" >Search</button>
        </div>
    )
}
