import React from "react";
import { IoIosFunnel } from "react-icons/io";

function Portfolio() {
  const walletData = [
    { id: 1, name: "CRYPTO", value: "30.000", currency: "BTC", icon: <IoIosFunnel />},
    { id: 2, name: "NEW WALLET", value: "0.000", currency: "PLN", icon: <IoIosFunnel />},
    { id: 3, name: "NEW WALLET", value: "0.000", currency: "PLN", icon: <IoIosFunnel />},
    { id: 4, name: "NEW WALLET", value: "0.000", currency: "PLN", icon: <IoIosFunnel />},
  ];

  const wallet = walletData.map((item) => (
    <div className="wallet" key={item.id}>
      <div className="wallet__name__value">
      <p className="wallet__name">{item.name}</p>
      <p className="wallet__value">{item.value}</p>
      </div>
      <div className="wallet__icon__currency">
      <p className="wallet__icon">{item.icon}</p>
      <p className="wallet__currency">{item.currency}</p>
      </div>
    </div>
  ));
    return (
      <>
         <div className="wallets">
         {wallet}
        </div>
      </>
       );
 };
 
 export default Portfolio;
