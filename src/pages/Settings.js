import React, { Component } from "react";

class Settings extends Component {
  state = {
    username: '',
  };

  handleChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.name);

    const value = e.target.value;
    this.setState({
      username: value,
    });
  };

  render() {
    return (
      <div className="settings">
        <form>
          <label htmlFor="user">
            Username:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange="this.handleChange"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Settings;
