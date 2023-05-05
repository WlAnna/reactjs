import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { bgcolor: '', width: '', height: '' };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handleSubmit(evt) {
        evt.preventDefault()
        let box = { ...this.state, id: uuidv4() };
        this.props.createBox(box)
        this.setState({ bgcolor: '', width: '', height: '' })
    }

    render() {
        return (
            <div>xxx
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="bgcolor">Background Color:</label>
                    <input
                        id='bgcolor'
                        type='text'
                        name='bgcolor'
                        value={this.state.bgcolor}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="width">Width:</label>
                    <input
                        id='width'
                        type='text'
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="bgcolor">Height:</label>
                    <input
                        id='height'
                        type='text'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button>Add New Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm