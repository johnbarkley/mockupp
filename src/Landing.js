import React, { Component } from 'react'

import FeatureCheck from './components/FeatureCheck'
import Button from './components/Button'
import Browser from './components/Browser'
import throww from './assets/throww.png'
import savee from './assets/savee.png'
import primer from './assets/primer.png'
import port from './assets/port.png'

import { NavLink } from 'react-router-dom'
let colorSlideInt, browserSlideInt, colors, browsers

class Landing extends Component {
    constructor(props) {
        super(props)

        this.shiftColors = this.shiftColors.bind(this)
        this.shiftBrowsers = this.shiftBrowsers.bind(this)
        this.resize = this.resize.bind(this)
    }

    shiftColors() {
        colors.forEach(function (e) {
            const width = window.innerWidth
            const curX = parseInt(window.getComputedStyle(e).left, 10)
            const diff = curX - width
            const lower = width * -2 - 50
            const upper = lower + 100
            if(diff > lower && diff < upper) {
                e.style.opacity = '0'
                e.style.left = '200%'
            }
            else {
                e.style.opacity = '1'
                e.style.left = diff + 'px'
            }
        })
    }

    shiftBrowsers() {
        browsers.forEach(function (e) {
            const width = window.innerWidth
            const curX = parseInt(window.getComputedStyle(e).left, 10)
            const diff = curX - width
            const lower = width/2 - (width * 2) - 50
            const upper = lower + 100
            if(diff > lower && diff < upper) {
                e.style.opacity = '0'
                e.style.left = '250%'
            }
            else {
                e.style.opacity = '1'
                e.style.left = diff/width*100 + 'vw'
            }

        })
    }

    componentDidMount() {
        colors = [document.getElementById('colorOne'), document.getElementById('colorTwo'), document.getElementById('colorThree'), document.getElementById('colorFour')]
        browsers = [document.getElementById('browserOne'), document.getElementById('browserTwo'), document.getElementById('browserThree'), document.getElementById('browserFour')]
        colorSlideInt = setInterval(this.shiftColors, 3000)
        browserSlideInt = setInterval(this.shiftBrowsers, 3000)

        window.addEventListener('resize', this.resize)
    }

    resize() {
        clearInterval(colorSlideInt)
        clearInterval(browserSlideInt)
    }

    componentWillUnmount() {
        clearInterval(colorSlideInt)
        clearInterval(browserSlideInt)
    }

    render() {
        return (
            <div className='landing'>
                <nav>
                    <a href='https://johnbarkley.github.io/mockupp' id='mockupp'>Mockupp</a>
                    <a href='http://johngbarkley.com' id='me' target='_blank' rel='noopener noreferrer'>A project by John Barkley</a>
                </nav>

                <div className='title'>
                    <h1><span>Create beautiful, browser-style</span><span>mockups in seconds.</span></h1>
                    <div className='checks'>
                        <FeatureCheck value='Perfect for presentations & portfolios' />
                        <FeatureCheck value='Customize background & browser layout' />
                        <FeatureCheck value='Download high-resolution mockup' />
                        <FeatureCheck value='100% free, forever' />
                    </div>

                    <NavLink to={'/app'}>
                        <Button
                        type='get-started'
                        text='Get started' />
                    </NavLink>
                </div>

                <Browser
                image={throww}
                url='throww.io'
                buttonColor='colored'
                dropShadow={true}
                example
                id='browserOne' />

                <Browser
                image={port}
                url='johngbarkley.com'
                buttonColor='colored'
                dropShadow={true}
                example
                id='browserTwo' />

                <Browser
                image={primer}
                url='primer.style'
                buttonColor='gray'
                dropShadow={true}
                example
                id='browserThree' />

                <Browser
                image={savee}
                url='savee.it'
                buttonColor='colored'
                dropShadow={true}
                example
                id='browserFour' />

                <div className='solid-color' id='colorOne'></div>
                <div className='solid-color' id='colorTwo'></div>
                <div className='solid-color' id='colorThree'></div>
                <div className='solid-color' id='colorFour'></div>
            </div>
        )
    }
}

export default Landing
