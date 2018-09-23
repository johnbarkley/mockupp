import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import { Edit } from 'react-feather'

class BackgroundRadio extends Component {
    constructor(props) {
        super(props)

        this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this)
        this.handleColorPickerClick = this.handleColorPickerClick.bind(this)
        this.handleColorPickerClose = this.handleColorPickerClose.bind(this)
        this.handleBackgroundImageClick = this.handleBackgroundImageClick.bind(this)
        this.handleBackgroundSwitchClick = this.handleBackgroundSwitchClick.bind(this)
    }

    handleBackgroundColorChange(color) {
        this.props.onBackgroundColorChange(color.rgb)
    }

    handleBackgroundImageClick() {
        document.getElementById('Image').checked = true
        document.getElementById('backgroundImageFile').click()
    }

    handleColorPickerClick(e) {
        document.getElementById('Solid').checked = true
        this.props.onColorPickerClick()
    }

    handleColorPickerClose(e, displayColorPicker) {
        this.props.onColorPickerClose(displayColorPicker)
    }

    handleBackgroundSwitchClick(background) {
        this.props.onBackgroundSwitchClick(background)
    }

    render() {
        const radioId = this.props.value
        let squareStyle

        if (radioId === 'Solid') { // solid color
            const col = this.props.color
            squareStyle = {
                backgroundColor: `rgba(${ col.r }, ${ col.g }, ${ col.b }, ${ col.a })`
            }
        }
        else { // image
            if (this.props.backgroundImage) { // exists bg image, set as square thumbnail bg
                squareStyle = {
                    backgroundImage: 'url(' + this.props.backgroundImage + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }
            }
            else { // no bg image, white bg for square thumbnail
                squareStyle = {
                    backgroundColor: '#fff'
                }
            }
        }

        return (
            <div className='bgRadio'
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}>
                <label htmlFor={radioId}>{this.props.value}</label>

                <Edit
                size={14}
                color={'#333'}
                onClick={radioId==='Solid' ? this.handleColorPickerClick : this.handleBackgroundImageClick} />

                <input type='radio'
                name='bg-radio'
                value={this.props.value}
                id={radioId}
                className='bgrButton'
                style={squareStyle}
                defaultChecked={this.props.checked ? true : false}
                onClick={this.handleBackgroundSwitchClick} />

                { this.props.displayColorPicker ?
                    <div className='popover'>
                        <div className='cover'
                        onClick={this.handleColorPickerClose} />

                        <SketchPicker
                        id='colorPicker'
                        color={this.props.color}
                        onChange={this.handleBackgroundColorChange}
                        presetColors={[]}
                        width={180} />
                    </div>
                : null }

            </div>
        )
    }
}

export default BackgroundRadio
