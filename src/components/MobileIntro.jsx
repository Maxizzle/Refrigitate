import React from 'react'
import { NavLink } from 'react-router-dom'

 const MobileIntro = () => {
    return (
        <div>
            <h1>Welcome to Refrigerate!</h1>
            <h2>Search for an ingredeint</h2>

            
            <NavLink exact to='/' active className='skip'>
                Skip
            </NavLink>
        </div>
    )
}

export default MobileIntro


