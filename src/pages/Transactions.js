import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import {IoMdAdd} from "react-icons/io";
import { Link } from "react-router-dom";

class Transactions extends Component {
  state = {
    transactionsData: [
      {
        id: "1",
        date: "12/01/2021",
        portfolio: "CRYPTO",
        transaction_type: "EXCHANGE",
        buy_amount: "1.00",
        sell_amount: "10000$",
        fee_amount: "10$",
      },
  
    ],
  };

  render() {
    const transactions = this.state.transactionsData.map((item) => (
      <div className="transactions_row" key={item.id}>
        <p className="transactions_cell">{item.date}</p>
        <p className="transactions_cell">{item.portfolio}</p>
        <p className="transactions_cell">{item.transaction_type}</p>
        <p className="transactions_cell">{item.buy_amount}</p>
        <p className="transactions_cell">{item.sell_amount}</p>
        <p className="transactions_cell">{item.fee_amount}</p>
      </div>
    ));

    return (
      <>
    
        <div className="transactions_table">
          <div className="transactions_heading">
            <p>Transactions</p>
          </div>
          <div className="transactions_grid">
            <div className="transactions_row transactions_title">
              <p className="transactions_cell">Date</p>
              <p className="transactions_cell">Portfolio</p>
              <p className="transactions_cell">Transaction Type</p>
              <p className="transactions_cell">Buy Amount/ Deposit Currency</p>
              <p className="transactions_cell">Sell Amount/ Withdraw Currency</p>
              <p className="transactions_cell">Fee Amount currency</p>
            </div>
            {transactions}
          </div>
          

          <Link to="/transactions/new_transaction">
            <p className="add"><IoMdAdd/></p>    
          </Link>
          <div className="btn">
            <button>Delete transaction</button>
            <button>Download svg</button>
          </div>
        </div>
      </>
    );
  }
}

export default Transactions;
