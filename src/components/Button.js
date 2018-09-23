import React from 'react'

const Button = props => {
    let buttonClass
    if(props.type === 'design')
        buttonClass = 'upload-design'
    else {
        buttonClass = props.type
    }

    return (
        <button className={buttonClass}
        onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button
