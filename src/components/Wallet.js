import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Wallet() {
  const walletData = [
    { name: "CRYPTO", value: "30.000", currency:"BTC" },
    { name: "FIAT", value: "20.000", currency:"PLN"  },
    { name: "XXX", value: "20.000", currency:"XX"  },
  ];

  const wallet = walletData.map((item) => (
    <div className="wallet" key={item.name}>
      <p>{item.name}</p>
      <p>{item.value}</p>
      <p>{item.currency}</p>
    </div>



  ));

  return (
  <>

      <div className="wallets_table">
          <div className="wallets_row">
            {wallet}
            <div className="wallet">New wallet</div>
          </div>
     </div>
  
  </>);
}

export default Wallet;