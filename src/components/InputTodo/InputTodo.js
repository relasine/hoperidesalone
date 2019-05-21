import React, { Component } from "react";
import "./InputTodo.css";

class InputTodo extends Component {
  constructor() {
    super();

    this.state = {
      todo: ""
    };
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.todo) {
      return;
    } else {
      this.props.handleSubmit(this.state.todo);
      this.setState({
        todo: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-todo">
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleChange}
          className="todo-input"
          placeholder="add todo"
        />
      </form>
    );
  }
}

export default InputTodo;
