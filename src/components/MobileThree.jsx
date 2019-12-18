import React from 'react'
import { NavLink } from 'react-router-dom'
import mix from '../images/mix.png'
import Header from './shared/Header'

const MobileThree =() => {
    return (

        <div className='third-page'>
             <Header />
            <h1>3.</h1>

            <h2>See available recipes based on your ingredients</h2>

            <div className='third-image'>
                <img src={mix} alt = '' />
            </div>

            <NavLink exact to='/MobileFour' active className='skip'>
                Skip
                </NavLink>
        </div>
    )
}
export default MobileThree