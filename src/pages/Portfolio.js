import React, { Component } from "react";

class Portfolio extends Component {

    state = {walletData: [
    {
      id: "1",
      name: "CRYPTO",
      status: "5.000",
      currency: "BTC",
    },
    {
      id: "2",
      name: "",
      status: "0.000",
      currency: "USD",
    },
    {
      id: "3",
      name: "",
      status: "0.000",
      currency: "USD",
    },
    {
      id: "4",
      valname: "",
      status: "0.000",
      currency: "USD",
    },
  ]
};

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
