import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import {IoMdAdd} from "react-icons/io";
import { Link } from "react-router-dom";
import TransactionData from "../data/TransacionData";
class Transactions extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        transactions: []
      };
    }


//    deleteTasks = (id) => {
//     const transactions = [...this.state.transactions];
//     const index = transactions.findIndex(transaction => transaction.id === id);
//     transactions.splice(index);


  componentDidMount() {
    this.setState({transactions: TransactionData});
}


// API CODE
//   componentDidMount() {
//     TransactionData.getTransactions().then((response) => {
//         this.setState({transactions: response.data})
//     });
// }

fetchData = () => {
  fetch('/mydata/'+this.props.id).then(data => {
      console.log(data);
    this.setState({ data:data }, () => {
      // click the CSVLink component to trigger the CSV download
      this.csvLink.current.link.click()
    })
  })
}

  render() {
    const transactions = this.state.transactions.map((item) => (
      <div className="transactions_row" key={item.id}>
        <p className="transactions_cell"><input type="checkbox" 
              id={item.id}
              onClick= {this.handleClick}></input></p>
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
            <p className="transactions_cell"></p>
              <p className="transactions_cell">Date</p>
              <p className="transactions_cell">Portfolio</p>
              <p className="transactions_cell">Transaction Type</p>
              <p className="transactions_cell">Buy Amount/ Deposit Currency</p>
              <p className="transactions_cell">Sell Amount/ Withdraw Currency</p>
              <p className="transactions_cell">Fee Amount currency</p>
            </div>
            {transactions}
          </div>
          
          
          <p className="add">
          <Link to="/new_transaction"><IoMdAdd/></Link>
          </p>

          <div className="btn">
            <button onClick={this.deleteTasks}>Delete transaction</button>
            <button>Download svg</button>
          </div>
        </div>

      </>
    );
  }
}

export default Transactions;



