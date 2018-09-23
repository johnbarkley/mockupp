import React, { Component } from 'react'

class Radio extends Component {
    constructor(props) {
        super(props)

        this.handleToggleRadio = this.handleToggleRadio.bind(this)
    }

    handleToggleRadio(e) {
        const targ = e.target.value
        if (targ === 'Solid color') {
            // take what's in the solid color box
            this.props.onToggleRadio('#fff') // this.props.background
        }
        else if (targ === 'Two-color') {
            // take the two colors in the boxes
            this.props.onToggleRadio(['#333', 'red'])
        }
        else if (targ === 'Image') {
            // take the image
            this.props.onToggleRadio('#000')
        }
    }

    openBackgroundImageFileDialog() {
        document.getElementById('imageUploadButtonToggle').classList.remove('checkmark-hidden')
        document.getElementById('backgroundImageFile').click()
    }

    render() {
        let radioId

        // if I add another set of radios, 'name' attr needs to be changed to the thing the radios pertain to
        return (
            <div className='radio'>
                <input type="radio"
                name='bg-radio'
                value={this.props.value}
                id={radioId}
                className="form-button"
                defaultChecked={this.props.checked ? true : false}
                onClick={this.handleToggleRadio} />

                <label htmlFor={radioId}>{this.props.value}</label>
            </div>
        )
    }
}

export default Radio
