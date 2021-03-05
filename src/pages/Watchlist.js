import React from "react";

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
    <>
      <div className="watchlist">
        <div className="watchlist_heading">watchlist</div>
        <div className="watchlist_table">
          <div className="watchlist_row watchlist_title">
            <p className="watchlist_cell">Name</p>
            <p className="watchlist_cell">Price</p>
            <p className="watchlist_cell">Holdings</p>
            <p className="watchlist_cell">Avg Asset Price</p>
            <p className="watchlist_cell">Current Value</p>
            <p className="watchlist_cell">Total Return ona asset</p>
          </div>
          {watchlist}
          <div className="watchlist_row watchlist_new">
            New Asset
          </div>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
