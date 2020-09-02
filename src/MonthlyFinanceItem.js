import React from "react";

import "./MonthlyFinanceItem.css";

const MonthlyFinanceItem = (props) => {
  return (
    <div className="MonthlyFinanceItem">
      <p>{props.num}</p>
      <p>{`$${props.yearPrice.toFixed(2)}`}</p>
    </div>
  );
};

export default MonthlyFinanceItem;
