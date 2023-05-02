import React, { Component } from 'react'
import LotteryBall from './LotteryBall'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 42
    }
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) }
        this.regenerateNums = this.regenerateNums.bind(this)
    }

    regenerateNums() {
        // let arr = []
        // for (let i = 0; i < this.props.numBalls; i++) {
        //     let num = Math.floor(Math.random() * this.props.maxNum) + 1
        //     arr.push(num)
        // }
        // console.log(arr)

        // this.setState({ nums: arr })

        this.setState(curState => ({ nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1) }))

    }

    render() {
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                <div className='Lottery-balls'>
                    {this.state.nums.map(num => <LotteryBall val={num} />)}
                </div>
                <button onClick={this.regenerateNums}>Generate</button>
            </div>
        )
    }
}

export default Lottery
