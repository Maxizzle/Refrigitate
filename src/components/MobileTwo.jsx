import React from 'react'
import touch from '../images/touch-screen.png'
import { NavLink} from 'react-router-dom'
import Header from './Header'


export default function MobileTwo() {
    return (

        <div className='second-page'>
            {/* <Header /> */}

            <h1>2.</h1>

            <h2>Add as many as you have to your list</h2>
            
            <div className='second-image'>
                <img src={touch} alt = '' />
            </div>
                <NavLink exact to='/MobileThree' active className='skip'>
                Skip
                </NavLink>
        </div>
    )
}
