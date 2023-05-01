import React, { Component } from 'react'
import Square from './Square'

class SquareGame extends Component {
    // in state there is current green num
    constructor(props) {
        super(props);
        this.state = { updatedColor: false }
        this.updateColor = this.updateColor.bind(this)

    }

    updateColor() {
        this.setState({ updatedColor: true })
        console.log(this.state.updatedColor)

    }



    render() {
        return (
            <div>
                <Square updatedColor={this.state.updatedColor} />
                <button onClick={this.updateColor}>Start</button>
            </div>

        )
    }
}

export default SquareGame


// import React, { Component } from 'react'
// import Square from './Square'

// class SquareGame extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { updatedColor: false }
//     }

//     render() {
//         return (
//             <div>
//                 <Square updatedColor={this.state.updatedColor} />

//             </div>

//         )
//     }
// }

// export default SquareGame