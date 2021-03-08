import React, { Component } from "react";

class Portfolio extends Component {

    state = {walletData: [
    {
      id: "1",
      value: "CRYPTO",
      status: "1.000",
      currency: "BTC",
    },
    {
      id: "2",
      value: "NghfhLET",
      status: "2.000",
      currency: "PLN",
    },
    {
      id: "3",
      value: "NEfghfghALLET",
      status: "3.000",
      currency: "EUR",
    },
    {
      id: "4",
      value: "fghfgLET",
      status: "4.000",
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



  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };


  render() {
    const wallet = this.state.walletData.map((item) => (
      <div className="wallet_background" >
        <div className="wallet">
          <div className="wallet__name__value">
            <form onSubmit={this.handleSubmit} noValidate >
            
            <input 
               key= {this.state.id}
                type="text"
                name={this.state.value}
                value={this.state.value}
                placeholder="Name your wallet"
                onChange={this.handleChange} 
              />

            </form>
            <p className="wallet__value" >{item.status}</p>
          </div>
          <div className="wallet__icon__currency">
            <p className="wallet__currency">{item.currency}</p>
          </div>
        </div>
      </div>
    ));

    return <div className="portfolio">{wallet}</div>;
  }
}

export default Portfolio;

// import React from "react";
// import { IoLogoBitcoin } from "react-icons/io";

// function Portfolio() {
//   const walletData = [
//     {
//       id: 1,
//       name: "CRYPTO",
//       value: "30.000",
//       currency: "BTC",
//       icon: <IoLogoBitcoin />,
//     },
//     {
//       id: 2,
//       name: "NEW WALLET",
//       value: "0.000",
//       currency: "PLN",
//       icon: <IoLogoBitcoin />,
//     },
//     {
//       id: 3,
//       name: "NEW WALLET",
//       value: "0.000",
//       currency: "PLN",
//       icon: <IoLogoBitcoin />,
//     },
//     {
//       id: 4,
//       name: "NEW WALLET",
//       value: "0.000",
//       currency: "PLN",
//       icon: <IoLogoBitcoin />,
//     },
//   ];

//   const wallet = walletData.map((item) => (
//     <div className="wallet_background" key={item.id}>
//       <div className="wallet">
//         <div className="wallet__name__value">
//           <p className="wallet__name">{item.name}</p>
//           <p className="wallet__value">{item.value}</p>
//         </div>
//         <div className="wallet__icon__currency">
//           <p className="wallet__icon">{item.icon}</p>
//           <p className="wallet__currency">{item.currency}</p>
//         </div>
//       </div>
//     </div>
//   ));
//   return (
//     <>
//       <div className="portfolio">{wallet}</div>
//     </>
//   );
// }

// export default Portfolio;
