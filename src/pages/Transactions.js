import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Transactions() {
  const assetsData = [
    {
      name: "BTC",
      price: "8000$",
      holdings: "1.6",
      average: "5500$",
      value: "13332$",
      return: "4165$",
    },
    {
      name: "ETH",
      price: "8000$",
      holdings: "1.6",
      average: "5500$",
      value: "13332$",
      return: "4165$",
    },
  ];

  const assets = assetsData.map((item) => (
    <div className="assets_row" key={item.name}>
      <p className="assets_cell">{item.name}</p>
      <p className="assets_cell">{item.price}</p>
      <p className="assets_cell">{item.holdings}</p>
      <p className="assets_cell">{item.average}</p>
      <p className="assets_cell">{item.value}</p>
      <p className="assets_cell">{item.return}</p>
    </div>
  ));

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
          {assets}
          <div className="assets_row assets_new">
            New Asset
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
