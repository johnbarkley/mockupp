import React from 'react'
import BrowserHeader from './BrowserHeader'

const Browser = props => {
    let image
    if (!props.image) { // no image
        const defaultBg = {
            width: '100%',
            height: .82 * window.innerHeight - 30,
            backgroundColor: '#fff'
        }
        image = <div style={defaultBg}></div>
    }
    else { // image selected
        image = (
            <img src={props.image}
            alt='design'
            className='design' />
        )
    }

    const dropShadow = props.dropShadow

    const width = props.imageWidth
    const height = props.imageHeight
    let imgHeight
    if(width && height) {
        const ele = document.getElementsByClassName('browser')[0]
        const ratio = width/ele.clientWidth
        imgHeight = height/ratio + 28
        ele.style.height = imgHeight + 'px'
    }

    let browstyle
    if(dropShadow) {
        browstyle = {
            width: '73%',
            height: imgHeight,
            zIndex: '100',
            userSelect: 'none',
            boxShadow: '10px 10px 60px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px 5px 0px 0px'
        }
    }
    else {
        browstyle = {
            width: '73%',
            height: imgHeight,
            zIndex: '100',
            userSelect: 'none',
            borderRadius: '5px 5px 0px 0px'
        }
    }

    return (
        <div className='browser'
        style={browstyle}>
            <BrowserHeader url={props.url}
            buttonColor={props.buttonColor} />
            {image}
        </div>
    )
}

export default Browser
