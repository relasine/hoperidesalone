import React, { Component } from "react";
import "./App.css";
import CurrentDate from "../CurrentDate/CurrentDate";
import InputTodo from "../InputTodo/InputTodo";
import Todos from "../Todos/Todos";
import InputName from "../InputName/InputName";

class App extends Component {
  constructor() {
    super();

    this.state = {
      date: undefined,
      name: undefined,
      todos: []
    };
  }

  componentDidMount = () => {
    this.getFromLocalStorage();
  };

  getFromLocalStorage = () => {
    const name = JSON.parse(localStorage.getItem("name")) || "";
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    this.setState({
      name,
      todos
    });
  };

  addNewTodo = newTodo => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({
      todos: todos
    });
  };

  removeTodo = todoToRemove => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const filteredTodos = todos.filter(todo => {
      return todo !== todoToRemove;
    });

    this.setState({
      todos: filteredTodos
    });

    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  submitName = name => {
    localStorage.setItem("name", JSON.stringify(name));
    this.setState({ name });
  };

  render() {
    const styles = {
      background: "url(./retrowave-landscape.jpeg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    };

    return (
      <div style={styles} className="app">
        {this.state.name && (
          <p className="hello" data-text={`Hello, ${this.state.name}`}>
            Hello, {this.state.name}
          </p>
        )}
        {!this.state.name && <InputName handleSubmit={this.submitName} />}
        {this.state.name && <InputTodo handleSubmit={this.addNewTodo} />}
        {this.state.name && (
          <Todos removeTodo={this.removeTodo} todos={this.state.todos} />
        )}
        <CurrentDate />
        <p className="hope">Hope Rides Alone</p>
      </div>
    );
  }
}

export default App;
