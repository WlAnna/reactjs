import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNum: 1
        }

    }

    handleClick = () => {
        let num = Math.floor(Math.random() * 10) + 1
        this.setState({ randomNum: num })
    }

    render() {


        return (
            <div className='Clicker'>
                <p>This number is: {this.state.randomNum}</p>
                {this.state.randomNum === 7 && <p >Winner!!!</p>}
                {this.state.randomNum !== 7 && <button onClick={this.handleClick}>Random Number</button>}

            </div>
        )
    }
}

export default Clicker



