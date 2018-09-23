import React from 'react'

const UrlPicker = props => {
    return (
        <div className='url-header'>
            <p id='url-header'>URL:</p>
            <input type='text'
            placeholder='your-site-here.com'
            spellCheck='false'
            maxLength='28'
            className='url'
            value={props.value}
            onChange={props.onChange} />
        </div>
    )
}

export default UrlPicker
