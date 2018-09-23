import React from 'react'

const ImageInput = props => {
    return (
        <input
        type='file'
        id={props.type}
        accept='.jpg, .jpeg, .png, .gif, .svg'
        style={{ display: 'none' }}
        onChange={props.onChange} />
    )
}

export default ImageInput
