import React, { Component } from 'react'
import Lottery from './Lottery'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Lottery />
                <Lottery
                    title={'Mini Lotto'}
                    numBalls={5}
                    maxNum={42}
                />
            </div>
        )
    }
}

export default App


