import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import MonthlyFinanceItem from "./MonthlyFinanceItem";

import "./MonthlyFinance.css";

const MonthlyFinance = (props) => {
  function calculateTotalCompoundInterest(
    principal,
    annual_rate,
    n_times,
    t_years
  ) {
    return (
      principal * (Math.pow(1 + annual_rate / n_times, n_times * t_years) - 1)
    );
  }
  function calcThirtyYear() {
    if (parseInt(props.powerBill == 0)) {
      let prevYear = 1;
    } else {
      let prevYear = parseInt(props.powerBill);
    }
    let totalPaid = 0;
    let arr = [];

    for (let i = 0; i < 30; i++) {
      arr.push(prevYear);
      if (i === 0 || i === 1) {
        totalPaid += prevYear * 12;
        const newVal =
          prevYear + calculateTotalCompoundInterest(prevYear, 0.06, 1, 1);
        prevYear = newVal;
      } else {
        totalPaid += prevYear * 12;
        const newVal =
          prevYear + calculateTotalCompoundInterest(prevYear, 0.03, 1, 1);
        prevYear = newVal;
      }
    }
    console.log(totalPaid);
    return [arr, totalPaid];
  }

  function calcSolarPayment() {
    let arr = [];
    let arrTaxCreds = [];
    const principal = props.totalSystemPrice;
    const interest = props.interest / 100 / 12;
    const payments = props.termLength * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    const taxCreds = props.totalSystemPrice * 0.26;
    const principalWithTaxCreds = props.totalSystemPrice - taxCreds;
    console.log(principalWithTaxCreds);

    const monthlyWithTaxCreds =
      (principalWithTaxCreds * x * interest) / (x - 1);

    for (let i = 0; i < props.termLength; i++) {
      arr.push(monthly);
      arrTaxCreds.push(monthlyWithTaxCreds);
    }

    console.log(arr);
    console.log(arrTaxCreds);

    return [
      monthly,
      monthlyWithTaxCreds,
      arr,
      arrTaxCreds,
      taxCreds,
      principalWithTaxCreds,
    ];
  }
  const powerBillNoSolarCalcs = calcThirtyYear()[0];
  const powerBillTotalPaid = calcThirtyYear()[1];

  const monthlySolarPaymentTaxCreds = calcSolarPayment()[3];
  const monthlySolarPaymentNoTax = calcSolarPayment()[2];
  const taxCreds = calcSolarPayment()[4];
  const totalAfterTax = calcSolarPayment()[5];

  return (
    <Fragment>
      <div className="MonthlyFinance">
        <div className="NoSolarFinance">
          <div
            className="heading"
            onClick={() => {
              calcThirtyYear();
            }}
          >
            <p>No Solar</p>
          </div>
          <div className="subheading">
            <p>{`30-Year Cost @ $${props.powerBill} (+3% per year)`}</p>
          </div>
          <div className="content">
            {powerBillNoSolarCalcs.map((value, index) => {
              return <MonthlyFinanceItem num={index + 1} yearPrice={value} />;
            })}
            <p className="TotalPaid">{`Total Paid to the Power Company: $${powerBillTotalPaid
              .toFixed(2)
              .toLocaleString("en")}`}</p>
          </div>
        </div>
        <div className="SolarFinance">
          <div className="heading">
            <p>Go Solar</p>
          </div>
          <div className="subheading">
            <p>Monthly Solar Payments Each Year</p>
          </div>
          <div className="content">
            {monthlySolarPaymentTaxCreds.map((value, index) => {
              return <MonthlyFinanceItem yearPrice={value} num={index + 1} />;
            })}
            <div className="heading">
              <p>System Details</p>
            </div>
            <div className="details">
              <p>{`Total Amount: $${props.totalSystemPrice.toLocaleString(
                "en"
              )}`}</p>
              <p>{`Tax Credits Applied: ${taxCreds.toLocaleString("en")}`}</p>
              <p>{`Net Amount: $${totalAfterTax.toLocaleString("en")}`}</p>
              <p>{`System Size: ${props.systemSize} kW`}</p>
              <p>{`Overall Offset: ${props.offset}%`}</p>
              <p>{`Payments w/o Tax Creds: $${monthlySolarPaymentNoTax[0].toFixed(
                2
              )}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <Link className="btn-finance" to="/">
          Go Back
        </Link>
      </div>
    </Fragment>
  );
};

export default MonthlyFinance;
