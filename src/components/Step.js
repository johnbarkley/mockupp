import React from 'react'

const Step = props => {
    return (
        <div className='step'>
            <div className='number'>
                <p>{props.number}</p>
            </div>
            {props.children}
        </div>
    )
}

export default Step
