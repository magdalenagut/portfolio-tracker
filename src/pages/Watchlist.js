import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Watchlist() {
  const watchlistData = [
    {
      id:"1",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"2",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"3",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"4",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"5",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"6",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"7",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"8",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
    {
      id:"9",
      name: "BTC",
      price: "8000$",
      hour: "1.6",
      day: "5500$",
      week: "13332$",
      volume: "4165$",
      marcetcap: "4165$",
    },
  ];

  const watchlist = watchlistData.map((item) => (
    <div className="watchlist_row" key={item.name}>
      <p className="watchlist_cell">{item.id}</p>
      <p className="watchlist_cell">{item.name}</p>
      <p className="watchlist_cell">{item.price}</p>
      <p className="watchlist_cell">{item.hour}</p>
      <p className="watchlist_cell">{item.day}</p>
      <p className="watchlist_cell">{item.week}</p>
      <p className="watchlist_cell">{item.volume}</p>
      <p className="watchlist_cell">{item.marcetcap}</p>
    </div>
  ));

  return (
    <> 
    
    <div className="watchlist_table">
      <div className="watchlist_heading">
        <p>Watchlist</p>
      </div>
      <div className="watchlist_grid">
        <div className="watchlist_row watchlist_title">
          <p className="watchlist_cell">#</p>
          <p className="watchlist_cell">Name</p>
          <p className="watchlist_cell">Price</p>
          <p className="watchlist_cell">1h</p>
          <p className="watchlist_cell">24h</p>
          <p className="watchlist_cell">7d</p>
          <p className="watchlist_cell">Volume</p>
          <p className="watchlist_cell">Market Cap</p>
        </div>
        {watchlist}
      </div>
    </div>
  </>
  );
}

export default Watchlist;
