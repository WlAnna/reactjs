import React, { Component } from 'react'
import './Square.css'

class Square extends Component {
    render() {

        let className = 'Square';
        if (this.props.updatedColor) {
            className += ' Square-color';
        }
        return (
            <div className={className}></div>
        )
    }
}

export default Square