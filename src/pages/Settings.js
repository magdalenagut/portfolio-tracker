import React, { Component } from "react";
class Settings extends Component {
  state = {
    username: "John Doe",
    email: "johndoe@gmail.com",
    password: "abcd1234",
    repeat_password: "abcd1234",
    currencies: ["USD", "EUR", "PLN", "BTC"],
    languages: ["English", "German", "Polish", "Spanish"],
    zones: ["UTC +0", "UTC +1	", "UTC -2", "UTC -3"],
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
    console.log("submited");
  };

  render() {
    const {
      username,
      email,
      password,
      repeat_password,
      currencies,
      languages,
      zones,
    } = this.state;
    return (
      <div className="settings">
        <form onSubmit={this.handleSubmit} noValidate>
          <p>Customize your profile settings</p>
          <div className="settings_area">
            <div className="app_settings">
              <label htmlFor="currency">Default currency</label>
              
              <select name="currency" onChange={this.handleChange}>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>

              <label htmlFor="language">Language</label>

              <select name="language" onChange={this.handleChange}>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>

              <label htmlFor="zones">Time zone </label>
              <select name="zone" onChange={this.handleChange}>
                {zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            <div className="profile_settings">
              <label htmlFor="user">Username:</label>
              <input
                type="text"
                id="user"
                name="username"
                value={username}
                placeholder="New username"
                onChange={this.handleChange}
              />

              <label htmlFor="email">e-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="sample@email.com"
                onChange={this.handleChange}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />

              <label htmlFor="repeat_password">Repeat Password:</label>
              <input
                type="password"
                id="repeat_password"
                name="repeat_password"
                placeholder="Repeat password"
                value={repeat_password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="btn">
            <button>Save</button>
          </div>
        </form>

      </div>
    );
  }
}

export default Settings;
