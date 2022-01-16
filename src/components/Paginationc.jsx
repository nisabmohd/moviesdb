import React from 'react'
import { Pagination } from 'react-bootstrap'
export default function Paginationc(props) {
    function nextpage() {
        props.nfunc()
    }
    function prevpage() {
        props.pfunc()
    }
    return (

        <div className='container d-flex justify-content-center my-5'>
            <Pagination>
                <Pagination.Prev onClick={prevpage} />
                <Pagination.Item active>{props.page}</Pagination.Item>
                <Pagination.Item >{props.page + 1}</Pagination.Item>
                <Pagination.Item >{props.page + 2}</Pagination.Item>
                <Pagination.Next onClick={nextpage} />
            </Pagination>
        </div>
    )
}
