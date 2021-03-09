import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewTransaction extends Component {
  state = {
    portfolios: ["Crypto"],
    types: ["Deposit", "Exchange", "Withdraw"],
    date: "14/03/2021",
    buy_amount: "",
    sell_amount: "",
    buy_currency: "",
    sell_currency: "",
    fee_amount: "",
    fee_currency: "",
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
      portfolios,
      types,
      date,
      buy_amount,
      sell_amount,
      buy_currency,
      sell_currency,
      fee_amount,
      fee_currency,
    } = this.state;

    return (
      <>
        <div className="new_transaction_background">
          <div className="new_transaciton">
            <form onSubmit={this.handleSubmit} noValidate>
           
              <div className="panel">
              <div className="transactions_heading">
            <p>New Transaction</p>
          </div>
                <div className="panel_row">
                  <div className="panel_cell">
                    <label htmlFor="portfolio">New Transaction</label>
                    <select name="portfolio" onChange={this.handleChange}>
                      {portfolios.map((portfolio) => (
                        <option key={portfolio} value={portfolio}>
                          {portfolio}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="panel_cell">
                    <label htmlFor="types">Transaction type</label>
                    <select name="type" onChange={this.handleChange}>
                      {types.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="panel_cell">
                    <label htmlFor="date">Date of transaction</label>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="panel_grid">
                  <div className="panel_cell">
                    <label htmlFor="buy_amount">Buy Amount</label>
                    <input
                      type="text"
                      name="buy_amount"
                      value={buy_amount}
                      placeholder="Buy Amount"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="panel_cell">
                    <label htmlFor="sell_amount">Sell Amount</label>
                    <input
                      type="text"
                      name="sell_amount"
                      value={sell_amount}
                      placeholder="Sell Amount"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="panel_cell">
                    <label htmlFor="buy_currency">Buy Currency</label>
                    <input
                      type="text"
                      name="buy_currency"
                      value={buy_currency}
                      placeholder="Buy Currency"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="panel_cell">
                    <label htmlFor="sell_currency">Sell Currency</label>
                    <input
                      type="text"
                      name="sell_currency"
                      placeholder="Sell Currency"
                      value={sell_currency}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="panel_cell">
                    <label htmlFor="fee_amount">Fee Amount</label>
                    <input
                      type="text"
                      name="fee_amount"
                      value={fee_amount}
                      placeholder="Fee Amount"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="panel_cell">
                    <label htmlFor="fee_currency">Fee Currency</label>
                    <input
                      type="text"
                      name="fee_currency"
                      placeholder="Fee Currency"
                      value={fee_currency}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="buttons">
                  <div className="btn">
                    <Link to="/transactions">
                      <button>Cancel</button>
                    </Link>
                  </div>

                  <div className="btn">
                    <button>Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default NewTransaction;
