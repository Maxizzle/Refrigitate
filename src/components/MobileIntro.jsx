import React from 'react'
import { NavLink } from 'react-router-dom'
import cooking from '../images/cooking.png'

 const MobileIntro = () => {
    return (
        <div className='intro-page'>
            <h1>1.</h1>

            <h2>Search for an ingredeint</h2>
            <div className='intro-image'>
            <img src={cooking} alt ='' />
            </div>

            <NavLink exact to='/MobileTwo' active className='skip'>
                Skip
            </NavLink>
        </div>
    )
}

export default MobileIntro


