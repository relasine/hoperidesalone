import React, { Component } from "react";
import "./Todos.css";

class Todos extends Component {
  generateTodos = () => {
    return this.props.todos.map((todo, index) => {
      return (
        <li key={`todo-${index}`}>
          {todo}{" "}
          <span
            className="delete-btn"
            onClick={() => this.props.removeTodo(todo)}
          >
            X
          </span>
        </li>
      );
    });
  };
  render() {
    return <ul className="todos">{this.generateTodos()}</ul>;
  }
}

export default Todos;
