import React from "react";
import "../assets/scss/portfolio-tracker.scss";

function Card() {
 
const cardData = [
        { name: "Total Value", value: "200$" },
        { name: "Total Return", value: "200$" },
        { name: "Net Deposits", value: "200$" },
        { name: "Net Proceeds", value: "200$"},
        { name: "Transaction Fees", value: "200$" },

      ];
 
const card = cardData.map((item) => (
    <div className="card" key={item.name}>
      <p>
        {item.name}
      </p>
      <p>
        {item.icon}
        {item.value}
      </p>
    </div>
    ));


       return (
           <>
    {card}
    </>
      
           )
 };

  export default Card;
 