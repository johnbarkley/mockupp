import React, { Component } from 'react'

class Checkbox extends Component {
    constructor(props) {
        super(props)

        this.handleToggleCheck = this.handleToggleCheck.bind(this)
    }

    handleToggleCheck(e) {
        const targ = e.target
        if (targ.value === 'Colored buttons') {
            if (targ.checked) { // color
                this.props.onToggleCheck('colored', this.props.dropShadow)
            }
            else { // decolor
                this.props.onToggleCheck('gray', this.props.dropShadow)
            }
        }
        else if (targ.value === 'Drop shadow') {
            if (targ.checked) { // shadow
                this.props.onToggleCheck(this.props.buttonColor, true)
            }
            else { // deshadow
                this.props.onToggleCheck(this.props.buttonColor, false)
            }
        }
    }

    openBackgroundImageFileDialog() {
        document.getElementById('imageUploadButtonToggle').classList.remove('checkmark-hidden')
        document.getElementById('backgroundImageFile').click()
    }

    render() {
        const val = this.props.value
        let checkId
        let checkedState = false

        // console.log('bc ' + this.props.buttonColor)
        // console.log('ds ' + this.props.dropShadow)

        if(val === 'Colored buttons') {
            checkId = 'check-buttonColor'
            if(this.props.buttonColor === 'colored') {
                checkedState = true
            }
        }
        else if(val === 'Drop shadow') {
            checkId = 'check-dropShadow'
            if(this.props.dropShadow === true) {
                checkedState = true
            }
        }

        return (
            <div className='checkbox'>
                <input type='checkbox'
                name={checkId}
                value={this.props.value}
                id={checkId}
                className='form-button'
                defaultChecked={checkedState}
                onClick={this.handleToggleCheck} />

                <label htmlFor={checkId}>{this.props.value}</label>
            </div>
        )
    }
}

export default Checkbox
