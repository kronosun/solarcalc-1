import React from "react";
import { Link } from "react-router-dom";

import "./FinanceListItem.css";

const FinanceListItem = (props) => {
  const commission = props.systemSize * props.pricePerWatt * 1000;
  const quotient = props.total * props.dealerFee;
  const difference = commission - quotient;
  const final = difference - props.adders;

  return (
    <div className="FinanceListItem">
      <Link to={`/${props.id}`}>{props.name}</Link>
      <p>{final.toFixed(2).toLocaleString()}</p>
      <p>0.00</p>
      <p>0.00</p>
      <p>0.00</p>
    </div>
  );
};

export default FinanceListItem;
