import React, { Component } from 'react'
import './App.css'

import Background from './components/Background'
import Browser from './components/Browser'
import StepMenu from './components/StepMenu'

let lastChosen

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null,
            imageWidth: null,
            imageHeight: null,
            url: '',
            buttonColor: 'gray',
            dropShadow: true,
            color: {
                r: '255',
                g: '255',
                b: '255',
                a: '1'
            },
            backgroundImage: null,
            displayColorPicker: false
        }

        this.handleValidDesignImage = this.handleValidDesignImage.bind(this)
        this.handleUrlChange = this.handleUrlChange.bind(this)
        this.handleToggleCheck = this.handleToggleCheck.bind(this)
        this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this)
        this.handleColorPickerClick = this.handleColorPickerClick.bind(this)
        this.handleColorPickerClose = this.handleColorPickerClose.bind(this)
        this.handleValidBackgroundImage = this.handleValidBackgroundImage.bind(this)
        this.handleBackgroundSwitchClick = this.handleBackgroundSwitchClick.bind(this)
        this.handleImageDimensionsChange = this.handleImageDimensionsChange.bind(this)
    }

    handleImageDimensionsChange(width, height) {
        this.setState({
            imageWidth: width,
            imageHeight: height
        })
    }

    handleValidDesignImage(image) {
        this.setState({
            image: image
        })
    }

    handleUrlChange(url) {
        this.setState({
            url: url
        })
    }

    handleToggleCheck(buttonColor, dropShadow) {
        this.setState({
            buttonColor: buttonColor,
            dropShadow: dropShadow
        })
    }

    handleBackgroundColorChange(color) {
        this.setState({
            color: color
        })
    }

    handleColorPickerClick() {
        lastChosen = 'color'
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    }

    handleColorPickerClose(displayColorPicker) {
        this.setState({
            displayColorPicker: displayColorPicker
        })
    }

    handleValidBackgroundImage(backgroundImage) {
        lastChosen = 'image'
        this.setState({
            backgroundImage: backgroundImage
        })
    }

    handleBackgroundSwitchClick(background) {
        const type = background.target.value
        if(!this.state.backgroundImage) {
            lastChosen = 'image'
            return
        }
        if(type === 'Solid') {
            lastChosen = 'color'
            this.setState({
                color: this.state.color
            })
        }
        else {
            lastChosen = 'image'
            this.setState({
                backgroundImage: this.state.backgroundImage
            })
        }
    }

    handleMouseMove = (e) => {
        const x = e.screenX/window.innerWidth
        const ele = document.getElementsByClassName('step-menu')[0]

        if(x < .4) {
            ele.style.left = '0px'
        }
        else {
            ele.style.left = '-360px'
        }
    }

    render() {
        return (
            <div className='container'
            onMouseMove={this.handleMouseMove}>
                <Background
                color={this.state.color}
                backgroundImage={this.state.backgroundImage}
                lastChosen={lastChosen} />

                <Browser
                image={this.state.image}
                imageWidth={this.state.imageWidth}
                imageHeight={this.state.imageHeight}
                url={this.state.url}
                buttonColor={this.state.buttonColor}
                dropShadow={this.state.dropShadow} />

                <StepMenu
                imageWidth={this.state.imageWidth}
                imageHeight={this.state.imageHeight}
                url={this.state.url}
                buttonColor={this.state.buttonColor}
                dropShadow={this.state.dropShadow}
                color={this.state.color}
                backgroundImage={this.state.backgroundImage}
                displayColorPicker={this.state.displayColorPicker}
                onValidDesignImage={this.handleValidDesignImage}
                onValidBackgroundImage={this.handleValidBackgroundImage}
                onUrlChange={this.handleUrlChange}
                onToggleCheck={this.handleToggleCheck}
                onBackgroundColorChange={this.handleBackgroundColorChange}
                onColorPickerClick={this.handleColorPickerClick}
                onColorPickerClose={this.handleColorPickerClose}
                onBackgroundSwitchClick={this.handleBackgroundSwitchClick}
                onImageDimensionsChange={this.handleImageDimensionsChange}
                lastChosen={lastChosen} />
            </div>
        )
    }
}

export default App
