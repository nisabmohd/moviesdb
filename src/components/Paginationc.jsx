import React from 'react'
import { Pagination } from 'react-bootstrap'
export default function Paginationc(props) {
    return (
        <div className='container d-flex justify-content-center my-5'>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{props.page-2}</Pagination.Item>
                <Pagination.Item>{props.page-1}</Pagination.Item>
                <Pagination.Item active>{props.page}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    )
}
