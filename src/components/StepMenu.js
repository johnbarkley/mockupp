import React, { Component } from 'react'
import Step from './Step'
import Checkbox from './Checkbox'
import BackgroundRadio from './BackgroundRadio'
import Button from './Button'
import UrlPicker from './UrlPicker'
import ImageInput from './ImageInput'
import htmlToImage from 'html-to-image'
import * as FileSaver from 'file-saver'

class StepMenu extends Component {
    constructor(props) {
        super(props)

        this.handleValidDesignImage = this.handleValidDesignImage.bind(this)
        this.handleValidBackgroundImage = this.handleValidBackgroundImage.bind(this)
        this.handleUrlChange = this.handleUrlChange.bind(this)
        this.handleImageDimensionsChange = this.handleImageDimensionsChange.bind(this)
    }

    handleImageButtonClick() {
        document.getElementById('designFile').click()
    }

    handleImageDimensionsChange(width, height) {
        this.props.onImageDimensionsChange(width, height)
    }

    handleValidDesignImage(e) {
        let reader = new FileReader()
        const imageDims = (width, height) => this.props.onImageDimensionsChange(width, height)

        reader.onload = (ev) => {
            let img = new Image()
            img.onload = function() {
                let width = img.width
                let height = img.height
                imageDims(width, height)
            }
            img.src = ev.target.result

            this.props.onValidDesignImage(ev.target.result)
        }
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
    }

    adjustBrowserHeight(width, height) {
        if(width && height) {
            const ele = document.getElementsByClassName('browser')[0]
            const ratio = width/ele.clientWidth
            const imgHeight = height/ratio + 30
            ele.style.height = imgHeight + 'px'
        }
    }

    handleValidBackgroundImage(e) {
        let reader = new FileReader()
        reader.onload = (ev) => {
            this.props.onValidBackgroundImage(ev.target.result)
        }
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
    }

    handleUrlChange(e) {
        this.props.onUrlChange(e.target.value)
    }

    download() {
        document.getElementsByClassName('step-menu')[0].style.opacity = '0'
        const container = document.getElementsByClassName('container')[0]
        htmlToImage.toBlob(container).then(function (blob) {
            FileSaver.saveAs(blob, 'mockupp.png')
        })
        setTimeout(function () {
            document.getElementsByClassName('step-menu')[0].style.opacity = '1'
        }, 500)
    }

    toggleFullscreen() {
        const element = document.documentElement
        const full = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null)

        if (!full) {
            if(element.requestFullscreen)
                element.requestFullscreen()
            else if(element.webkitRequestFullscreen)
                element.webkitRequestFullscreen()
            else if(element.mozRequestFullScreen)
                element.mozRequestFullScreen()
            else if(element.msRequestFullscreen)
                element.msRequestFullscreen()
        }
        else {
            if (document.exitFullscreen)
                document.exitFullscreen()
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen()
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen()
            else if (document.msExitFullscreen)
                document.msExitFullscreen()
        }
    }

    render() {
        return (
            <div className='step-menu'>
                <ul>
                    <li>
                        <Step number='1'>
                            <ImageInput
                            type='designFile'
                            onChange={this.handleValidDesignImage} />

                            <Button
                            type='design'
                            text='Upload design'
                            onClick={this.handleImageButtonClick} />

                            <p className='file-extensions'>(.png/.jpg/.svg/.gif)</p>
                        </Step>
                    </li>
                    <li>
                        <Step number='2'>
                            <p className='step-title'>Browser:</p>

                            <UrlPicker
                            value={this.props.url}
                            onChange={this.handleUrlChange} />

                            <Checkbox
                            value='Colored buttons'
                            buttonColor={this.props.buttonColor}
                            dropShadow={this.props.dropShadow}
                            onToggleCheck={this.props.onToggleCheck} />

                            <Checkbox
                            value='Drop shadow'
                            buttonColor={this.props.buttonColor}
                            dropShadow={this.props.dropShadow}
                            onToggleCheck={this.props.onToggleCheck} />
                        </Step>
                    </li>
                    <li>
                        <Step number='3'>
                            <p className='step-title'>Background:</p>

                            <div className='bg-step'>
                                <BackgroundRadio
                                value='Solid'
                                checked
                                lastChosen={this.props.lastChosen}
                                color={this.props.color}
                                displayColorPicker={this.props.displayColorPicker}
                                onBackgroundColorChange={this.props.onBackgroundColorChange}
                                onColorPickerClick={this.props.onColorPickerClick}
                                onColorPickerClose={this.props.onColorPickerClose}
                                onBackgroundSwitchClick={this.props.onBackgroundSwitchClick} />

                                <ImageInput
                                type='backgroundImageFile'
                                onChange={this.handleValidBackgroundImage} />

                                <BackgroundRadio
                                value='Image'
                                lastChosen={this.props.lastChosen}
                                backgroundImage={this.props.backgroundImage}
                                onBackgroundSwitchClick={this.props.onBackgroundSwitchClick} />
                            </div>
                        </Step>
                    </li>
                </ul>

                <Button
                type='download'
                text='Download'
                onClick={this.download} />

                <Button
                type='fullscreen'
                text='Fullscreen'
                onClick={this.toggleFullscreen} />
            </div>
        )
    }
}

export default StepMenu
