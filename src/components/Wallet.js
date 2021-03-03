import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Wallet() {
  const walletData = [
    { name: "CRYPTO", value: "30.000", currency:"BTC" },
    { name: "NEW WALLET", value: "0.000", currency:"PLN"  },
    { name: "NEW WALLET", value: "0.000", currency:"PLN"  },
    { name: "NEW WALLET", value: "0.000", currency:"PLN"  }
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

         
            {wallet}


  </>);
}

export default Wallet;