import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <h1>To Do List!</h1>
          <p>A simple React Todo List App</p>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
