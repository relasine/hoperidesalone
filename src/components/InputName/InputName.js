import React, { Component } from "react";
import "./InputName.css";

class InputName extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.name) {
      return;
    } else {
      this.props.handleSubmit(this.state.name);
      this.setState({
        name: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-name">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          className="name-input"
          placeholder="input your name"
        />
      </form>
    );
  }
}

export default InputName;
