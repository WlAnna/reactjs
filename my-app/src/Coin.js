import React, { Component } from 'react'
import './Coin.css'


class Coin extends Component {
    render() {
        return (
            <div className='Coin'>
                {this.props.side && <img src={this.props.side.imgSrc} alt={this.props.side.side} />}

            </div>)


    }
}

export default Coin