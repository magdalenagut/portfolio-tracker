import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Wallet() {
  const walletData = [
    { id: 1, name: "CRYPTO", value: "30.000", currency:"BTC" },
    { id: 2, name: "NEW WALLET", value: "0.000", currency:"PLN"  },
    { id: 3, name: "NEW WALLET", value: "0.000", currency:"PLN"  },
    { id: 4, name: "NEW WALLET", value: "0.000", currency:"PLN"  }
  ];

  const wallet = walletData.map((item) => (
    <div className="wallet" key={item.id}>
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