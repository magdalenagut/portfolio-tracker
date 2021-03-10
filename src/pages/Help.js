import React, { Component } from "react";
import { Link } from "react-router-dom";

class Help extends Component {
  state = {
    email: "",
    text: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent");
  };

  render() {
    const { email, text } = this.state;
    return (
      <div className="help">
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="help_area">
            <p>Find The Answer With <Link to="/faq">FAQ</Link>
            </p>
            <p>Send us a message or report a bug ;)</p>
            <label htmlFor="email">e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="sample@email.com"
              onChange={this.handleChange}
            />

            <label htmlFor="text">Message</label>
            <textarea
              className="text"
              type="text"
              id="text"
              name="text"
              value={text}
              placeholder="Your message"
              onChange={this.handleChange}
            />

            <div className="btn">
              <button>Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Help;
