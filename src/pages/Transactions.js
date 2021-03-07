import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";

class Transactions extends Component {

  

  render() {
    return (
      <>
        <div className="assets">
          <div className="assets_heading">Assets</div>
          <div className="assets_table">
            <div className="assets_row assets_title">
              <p className="assets_cell">Name</p>
              <p className="assets_cell">Price</p>
              <p className="assets_cell">Holdings</p>
              <p className="assets_cell">Avg Asset Price</p>
              <p className="assets_cell">Current Value</p>
              <p className="assets_cell">Total Return ona asset</p>
            </div>
          
            <div className="assets_row assets_new">New Asset</div>
          </div>
        </div>
      </>
    );
  }
}
export default Transactions;
