import React from 'react'
import '../css/nav.css'
import logo from '../ico/film-slate.png';
import { Link } from 'react-router-dom';
export const Navbarcomp = () => {
    return (
        <>
            <div className="navbarcus">
                <div className="navchild">
                    <div className="navlogo">
                        <img src={logo} alt="" />
                    </div>
                    <Link to="/">Movies </Link>
                    <Link to="/tv">TV Shows</Link>
                </div>

            </div>
        </>
    )
}