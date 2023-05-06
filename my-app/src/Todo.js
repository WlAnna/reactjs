import React, { Component } from "react";
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.name }
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleUpdate(evt) {
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }


    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let result
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <label></label>
                        <input type='text' value={this.state.task} name='task' onChange={this.handleChange}></input>
                        <button >Save</button>
                    </form>
                </div>
            )
        } else {
            result = (<div className="Todo">
                <p className={this.props.completed ? "completed" : ""} onClick={this.handleToggle}>{this.props.name}</p>
                <div className="Todo-buttons">
                    <button onClick={this.props.removeTodo}>X</button>
                    <button onClick={this.toggleForm}>Edit</button>
                </div>


            </div>)
        }
        return result
    }
}

export default Todo