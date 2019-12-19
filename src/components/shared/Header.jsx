import React from 'react'
import {Navlink} from 'react-router-dom'
import './../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="fridge" src={require('./../../images/refrigitate2.png')} alt='logo'/>
            <h1 className="logo">REFRIGITATE</h1>
            <div className='nav'>
                <p>FAVORITES</p>
                <p>HOW IT WORKS</p>
                <p>ABOUT US</p>
            </div>
        </div>
    )
}
export default Header