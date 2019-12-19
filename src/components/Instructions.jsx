import React from 'react'
import './styles/Instructions.css'
import MobileIntro from './MobileIntro'
import MobileTwo from './MobileTwo'
import MobileThree from './MobileThree'
import MobileFour from './MobileFour'

 const Instructions = () => {
    return (
            <div className='how_to'>
                {/* <img className='instruction_img' src={require('./../images/SVG/Asset 4.svg' )} alt='cooking'/>
                <img className='instruction_img' src={require('./../images/SVG/Asset 3.svg' )} alt='cooking'/>
                <img className='instruction_img' src={require('./../images/SVG/Asset 2.svg' )} alt='cooking'/>
                <img className='instruction_img' src={require('./../images/SVG/Asset 1.svg' )} alt='cooking'/> */}
                <MobileIntro/>
                <MobileTwo />
                <MobileThree />
                <MobileFour />
            </div>
    )
}

export default Instructions