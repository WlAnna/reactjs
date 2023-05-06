import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { todo: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }


    handleSubmit(evt) {
        evt.preventDefault();
        let newTodo = { ...this.state, id: uuidv4(), completed: false }
        this.props.createTodo(newTodo)
        this.setState({ todo: '' })

    }

    render() {
        return (
            <div>
                <h1>New Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo"></label>
                    <input
                        id="todo"
                        type="text"
                        name="todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    ></input>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm