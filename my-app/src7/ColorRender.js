import React, { Component } from 'react'
import './ColorRender.css'
import ColorBox from './ColorBox'
import { choice } from "./helpers";


class ColorRender extends Component {
    static defaultProps = {
        colors: ["rgb(255, 191, 155)", "rgb(77, 77, 77)", "rgb(180, 96, 96)", "rgb(255, 244, 224)", "rgb(236, 114, 114)", "rgb(224, 217, 140)", "rgb(247, 167, 108)", "rgb(195, 255, 153)"]
    };

    render() {
        return (

            <div className='ColorRender'>
                {this.props.colors.map(color => <ColorBox color={color} colors={this.props.colors} />)}
            </div>
        )
    }
}

export default ColorRender