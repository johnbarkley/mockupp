import React from 'react'

import check from '../assets/check.svg'

const FeatureCheck = props => {
    return (
        <div className='feature-check'>
            <img src={check} alt='checked check' />
            <p>{props.value}</p>
        </div>
    )
}

export default FeatureCheck
