import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import WatchlistData from "../data/WatchlistData";


class Watchlist extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      watchlistData: []
    };
  }

componentDidMount() {
  this.setState({watchlistData: WatchlistData});
}

render() {
  const watchlist = this.state.watchlistData.map((item) => (
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
}

export default Watchlist;