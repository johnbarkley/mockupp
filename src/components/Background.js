import React, { Component } from 'react'

class Background extends Component {
    render() {
        let containerStyle
        const col = this.props.color
        const bg = this.props.backgroundImage

        if(this.props.lastChosen === 'color') { // solid
            containerStyle = {
                backgroundColor: `rgba(${ col.r }, ${ col.g }, ${ col.b }, ${ col.a })`,
                backgroundImage: 'none'
            }
        }

        else { // image
            containerStyle = {
                backgroundImage: 'url(' + bg + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }
        }

        return (
            <div
            className='background'
            style={containerStyle}>
            </div>
        )
    }
}

export default Background
