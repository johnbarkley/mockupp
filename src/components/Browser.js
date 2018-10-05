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
    let bHeight
    if(width && height) {
        const ele = document.getElementsByClassName('browser')[0]
        const ratio = width/ele.clientWidth
        bHeight = height/ratio + 28
        bHeight = bHeight / window.innerWidth * 100
    }

    let browstyle, exampleId
    if (props.example) {
        switch(props.id) {
            case 'browserOne':
                exampleId = '50%'
                break
            case 'browserTwo':
                exampleId = '150%'
                break
            case 'browserThree':
                exampleId = '250%'
                break
            case 'browserFour':
                exampleId = '350%'
                break
            default:
                break
        }
        browstyle = {
            width: '82%',
            height: '41.2vw',
            zIndex: '1000',
            userSelect: 'none',
            boxShadow: '10px 10px 60px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px 5px 0px 0px',
            position: 'absolute',
            bottom: 100,
            left: exampleId,
            transform: 'translateX(-50%)'
        }
    }
    else if(dropShadow) {
        browstyle = {
            width: '73%',
            height: bHeight + 'vw',
            zIndex: '100',
            userSelect: 'none',
            boxShadow: '10px 10px 60px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px 5px 0px 0px'
        }
    }
    else {
        browstyle = {
            width: '73%',
            height: bHeight + 'vw',
            zIndex: '100',
            userSelect: 'none',
            borderRadius: '5px 5px 0px 0px'
        }
    }

    return (
        <div className='browser'
        style={browstyle}
        id={props.id}>
            <BrowserHeader url={props.url}
            buttonColor={props.buttonColor} />
            {image}
        </div>
    )
}

export default Browser
