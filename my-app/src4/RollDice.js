import React, { Component } from 'react'
import Dice from './Dice.js'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        numbers: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props) {
        super(props)
        this.state = {
            num1: 'one',
            num2: 'one',
            rolling: false
        }
        this.rollDice = this.rollDice.bind(this)
        this.roll = this.roll.bind(this)
    }


    rollDice() {
        let num1 = Math.floor(Math.random() * this.props.numbers.length)
        let num2 = Math.floor(Math.random() * this.props.numbers.length)
        this.setState({ num1: this.props.numbers[num1], num2: this.props.numbers[num2] })
        console.log(this.state.rolling)
    }

    roll() {
        this.setState({ rolling: true });
        setTimeout(() => {
            this.rollDice()
            this.setState({ rolling: false });
        }, 2000)
        console.log(this.state.rolling)

    }


    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Dice num={this.state.num1} isRolling={this.state.rolling} />
                    <Dice num={this.state.num2} isRolling={this.state.rolling} />
                </div>

                <button onClick={this.roll} disabled={this.state.rolling}> {this.state.rolling ? 'Rolling...' : 'Rol Dice'}</button>

            </div>
        )
    }
}

export default RollDice
