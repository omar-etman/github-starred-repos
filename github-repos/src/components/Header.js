import React from 'react'
import '../styles/Header.css'
import Octacat from '../logo.png'
function HeaderNav() {
    return (
        <h1 className="header">
            <div className="header__logo">
                <img src={Octacat} alt="octacat"/>
            </div>
            <div className="header__title">Github Starred Repos</div>
        </h1>
    )
}

export default HeaderNav
