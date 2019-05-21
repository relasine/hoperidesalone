import React, { Component } from "react";
import "./CurrentDate.css";
import { days, months } from "../../utils/helper";

class CurrentDate extends Component {
  constructor() {
    super();

    this.state = {
      date: undefined
    };
  }

  componentDidMount() {
    this.setCurrentDate();
  }

  setCurrentDate = () => {
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    this.setState({
      date: `${day}, ${month} ${date}, ${year}`
    });
  };

  // componentDidMount() {
  //   this.setCurrentDate();
  // }

  render() {
    return (
      <div className="date">
        {this.state.date && <p className="date-text">{this.state.date}</p>}
      </div>
    );
  }
}

export default CurrentDate;
