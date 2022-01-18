import React from 'react'
import '../css/Search.css'
import { useState } from 'react'
export const Searchbar = (props) => {
    const [val,setVal]=useState('')
    function handleinput(e){
     setVal(e.target.value)
    }
    return (
        <div className='searchbar'>
            <input type="text" placeholder='Enter Movie/TV Name ' onChange={handleinput} />
            <button disabled="true" onClick={ props.getkeyword(val)} >Search</button>
        </div>
    )
}
