// import React, { Component } from 'react'
// import './ColorBox.css'
// import { choice } from "./helpers";

// class ColorBox extends Component {
//     static defaultProps = {
//         colors: ["#FFBF9B", "#4D4D4D", "#4D4D4D", "#B46060", "FFF4E0", "#EC7272", "#E0D98C", "#F7A76C", "#C3FF99"]
//     };


//     changeColor() {

//     }

//     render() {
//         console.log(choice(this.props.colors))
//         return (

//             < div onClick={this.changeColor} className='ColorBox' style={{
//                 backgroundColor: choice(this.props.colors)
//             }
//             }>

//             </div >
//         )
//     }
// }

// export default ColorBox


import React, { Component } from 'react'
import './ColorBox.css'
import { choice } from "./helpers";

class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [...this.props.colors],
            curColor: this.props.color
        }
        this.changeColor = this.changeColor.bind(this)
        this.getColor = this.getColor.bind(this)

    }

    getColor() {
        // console.log(e.target.style.backgroundColor === 'rgb(255, 191, 155)')
        // this.setState({ curColor: e.target.style.backgroundColor })

    }

    changeColor() {
        let random = choice(this.state.colors)

        do {
            random = choice(this.state.colors)

        } while (random === this.state.curColor)

        this.setState({ curColor: random })
    }

    render() {

        return (
            <div

                onClick={this.changeColor()}
                className='ColorBox'
                style={{
                    backgroundColor: this.state.curColor
                }}
            >{this.state.curColor !== choice(this.props.colors) && 'true'}</div>
        )
    }

}

export default ColorBox