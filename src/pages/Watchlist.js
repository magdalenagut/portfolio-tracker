import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Watchlist() {
  const watchlistData = [
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
    {
      name: "ETH",
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
    {
      name: "ETH",
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

  const watchlist = watchlistData.map((item) => (
    <div className="watchlist_row" key={item.name}>
      <p className="watchlist_cell">{item.name}</p>
      <p className="watchlist_cell">{item.price}</p>
      <p className="watchlist_cell">{item.holdings}</p>
      <p className="watchlist_cell">{item.average}</p>
      <p className="watchlist_cell">{item.value}</p>
      <p className="watchlist_cell">{item.return}</p>
    </div>
  ));

  return (
    <> <div className="watchlist_table">
        <div className="watchlist_heading">
          <p>watchlist</p>
        </div>
        <div className="watchlist_grid">
          <div className="watchlist_row watchlist_title">
            <p className="watchlist_title_cell">Name</p>
            <p className="watchlist_title_cell">Price</p>
            <p className="watchlist_title_cell">Holdings</p>
            <p className="watchlist_title_cell">Avg Asset Price</p>
            <p className="watchlist_title_cell">Current Value</p>
            <p className="watchlist_title_cell">Total Return on a asset</p>
          </div>
          {watchlist}
        </div>
        </div>
    </>
  );
}

export default Watchlist;
