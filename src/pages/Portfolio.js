import React, { Component } from "react";
import PortfolioData from '../data/PortfolioData';

class Portfolio extends Component {

    state = {walletData: []
};



componentDidMount() {
  this.setState({walletData: PortfolioData});
}


  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [value]: name,
    });
  };


  handleChange = (e) => {
    e.preventDefault();
    console.log("submited");
  };


  render() {
    const wallet = this.state.walletData.map((item) => (
      <div className="wallet_background" key={item.id}>
        <div className="wallet">
          
          <div className="wallet__name">
            <form onSubmit={this.handleChange} noValidate >
            <input
                type="text"
                name={this.state.name}
                value={item.name}
                placeholder="Name your wallet"
                onChange={this.handleChange} 
              />
            </form>
          </div>

          <div className="wallet__value__currency">
          <p className="wallet__value" >{item.status}</p>
            <p className="wallet__currency">{item.currency}</p>
          </div>

        </div>
      </div>
    ));

    return <div className="portfolio">{wallet}</div>;
  }
}

export default Portfolio;
