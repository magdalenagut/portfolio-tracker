import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import AssetsData from '../data/AssetsData';
class Assets extends Component {
 state = {
   assetsData: []
}

componentDidMount() {
  this.setState({assetsData: AssetsData});
}


render()
{
  const assets = this.state.assetsData.map((item) => (
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
    <> <div className="assets_table">
        <div className="assets_heading">
          <p>Assets</p>
        </div>
        <div className="assets_grid">
          <div className="assets_row assets_title">
            <p className="assets_title_cell">Name</p>
            <p className="assets_title_cell">Price</p>
            <p className="assets_title_cell">Holdings</p>
            <p className="assets_title_cell">Avg Asset Price</p>
            <p className="assets_title_cell">Current Value</p>
            <p className="assets_title_cell">Total Return on a asset</p>
          </div>
          {assets}
        </div>
        </div>
    </>
  );
}
}

export default Assets;
