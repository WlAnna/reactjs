import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
    render() {
        let className = 'Dice';
        if (this.props.isRolling) {
            className += ' Dice-shake';
        }
        return (
            <div className={className}>
                <i className={`fas fa-dice-${this.props.num}`}></i>
            </div>
        )
    }
}

export default Dice
