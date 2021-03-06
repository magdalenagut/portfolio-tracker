import React from "react";
import "../assets/scss/portfolio-tracker.scss";
import { IoIosCash } from "react-icons/io";
import { IoIosReturnLeft } from "react-icons/io";
import { IoIosBriefcase } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";
import { IoIosFunnel } from "react-icons/io";

function Card() {
  const cardData = [
    { name: "Portfolio Status", value: "", icon: "" },
    { name: "Total Value", value: "700$", icon: <IoIosCash /> },
    { name: "Total Return", value: "200$", icon: <IoIosReturnLeft /> },
    { name: "Net Deposits", value: "300$", icon: <IoIosBriefcase /> },
    { name: "Net Proceeds", value: "200$", icon: <IoMdBriefcase /> },
    { name: "Transaction Fees", value: "100$", icon: <IoIosFunnel /> },
  ];

  const card = cardData.map((item) => (
    <div className="card" key={item.name}>
      <div className="card__name__value">
        <p className="card__name">{item.name}</p>
        <p className="card__value">{item.value}</p>
      </div>
      <p className="card__icon">{item.icon}</p>
    </div>
  ));

  return (
    <>
      {card}
    </>
  );
}

export default Card;
