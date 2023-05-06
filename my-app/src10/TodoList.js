import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.create = this.create.bind(this)
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(todoId) {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== todoId) })
    }

    update(todoId, todoName) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, todo: todoName }
            }
            return todo
        })

        this.setState({
            todos: updatedTodos
        })

    }

    toggleCompletion(todoId) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        let allTodos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                name={todo.todo}
                completed={todo.completed}
                removeTodo={() => this.remove(todo.id)}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />

        ))

        return (
            <div className="TodoList">
                {allTodos}
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default Todolist