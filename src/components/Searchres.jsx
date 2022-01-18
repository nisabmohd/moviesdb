import React from 'react'
import { Discovercard } from './Discovercard'
import '../css/searchpage.css'
export const Searchres = (props) => {
    return (
        <div className='searchesres'>
            {
                props.data.map((item)=>{
                    return (<Discovercard img={item.poster_path} title={item.original_title || item.original_name} date={item.release_date || item.first_air_date} id={item.id} cat={item.media_type} />)
                })
            }
        </div>
    )
}
