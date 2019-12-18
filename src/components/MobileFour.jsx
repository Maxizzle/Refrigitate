import React from 'react'
import oven from '../images/oven.png'
import { NavLink } from 'react-router-dom'
import Header from './shared/Header'


 const MobileFour =() => {
    return (
        <div className='fourth-page'>
            <Header />

            <h1>4.</h1>
            <h2>Get cooking!</h2>

            <div className='fourth-image'>
            <img src= {oven} alt = '' />
            </div>

            <NavLink exact to='/' active className='skip'>
                Get Started
                </NavLink>
        </div>
    )
}

export default MobileFour