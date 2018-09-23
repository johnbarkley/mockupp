import React from 'react'
import grayButtons from '../assets/grayButtons.svg'
import colorButtons from '../assets/colorButtons.svg'

const BrowserHeader = props => {
    return (
        <div className='browser-nav'>
            <img src={props.buttonColor === 'gray' ? grayButtons : colorButtons}
            alt='browser nav buttons' />
            <div className='search-bar'>
                <p>{props.url}</p>
            </div>
        </div>
    )
}

export default BrowserHeader
