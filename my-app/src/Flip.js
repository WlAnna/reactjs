import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from "./helpers";
import tail from './tail.jpg'
import head from './head.jpg'
import './Flip.css'


console.log(tail)


class Flip extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: head },
            { side: "tails", imgSrc: tail }
        ]
    };

    constructor(props) {
        super(props);
        this.flipCoin = this.flipCoin.bind(this)
        this.state = {
            side: null,
            flipsNum: 0,
            headsNum: 0,
            tailsNum: 0
        }
    }

    flipCoin() {
        let newCoin = choice(this.props.coins)
        this.setState(curState => ({
            side: newCoin,
            flipsNum: curState.flipsNum + 1,
            headsNum: curState.headsNum + (newCoin.side === 'heads' ? 1 : 0),
            tailsNum: curState.tailsNum + (newCoin.side === 'tails' ? 1 : 0)
        }))
    }

    render() {
        return (
            <div className='Flip'>
                <h1>Let's flip a coin!</h1>
                <Coin side={this.state.side} />
                <button onClick={this.flipCoin}>FLIP ME</button>
                <p>Out of {this.state.flipsNum} flips. These been {this.state.headsNum} heads and {this.state.tailsNum} tails.</p>
            </div>

        )
    }
}

export default Flip