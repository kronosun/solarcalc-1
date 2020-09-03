import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import FinanceListItem from "./FinanceListItem";

import "./Calculator.css";

function Calculator() {
  const [lights, setLights] = useState("no");
  const [groundMount, setGroundMount] = useState("no");
  const [nests, setNests] = useState(0);
  const [pumps, setPumps] = useState(0);
  const [aeroseals, setAeroseals] = useState(0);
  const [waterHeater, setWaterHeater] = useState("no");
  const [sprayFoam, setSprayFoam] = useState("no");
  const [curbEnergy, setCurbEnergy] = useState("no");
  const [otherAdders, setOtherAdders] = useState(0);
  const [pricePerWatt, setPricePerWatt] = useState(0);
  const [electricBill, setElectricBill] = useState(0);
  const [systemSize, setSystemSize] = useState(0);
  const [offset, setOffset] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalSystemPrice, setTotalSystemPrice] = useState(0);
  const [remainingBill, setRemainingBill] = useState(0);

  const financingList = [
    {
      loanName: "NRG CASH 0 Year | 0.00% APR",
      interestRate: 0,
      dealerFee: 0,
      id: 0,
    },
    {
      loanName: "NRG LoanPal 7 Year | 2.99% APR",
      interestRate: 2.99,
      dealerFee: 0.1565,
      termLength: 7,
      id: 1,
    },
    {
      loanName: "NRG LoanPal 7 Year | 7.99% APR",
      interestRate: 7.99,
      dealerFee: 0,
      termLength: 7,
      id: 2,
    },
    {
      loanName: "NRG LoanPal 10 Year | 2.99% APR",
      interestRate: 2.99,
      dealerFee: 0.1589,
      termLength: 10,
      id: 3,
    },
    {
      loanName: "NRG LoanPal 12 Year | 2.99% APR",
      interestRate: 2.99,
      dealerFee: 0.1849,
      termLength: 12,
      id: 4,
    },
    {
      loanName: "NRG LoanPal 15 Year | 3.99% APR",
      interestRate: 3.99,
      dealerFee: 0.1599,
      termLength: 15,
      id: 5,
    },
    {
      loanName: "NRG LoanPal 20 Year | 2.99% APR",
      interestRate: 2.99,
      dealerFee: 0.2075,
      termLength: 20,
      id: 6,
    },
    {
      loanName: "NRG LoanPal 20 Year | 3.99% APR",
      interestRate: 3.99,
      dealerFee: 0.1749,
      termLength: 20,
      id: 7,
    },
    {
      loanName: "NRG LoanPal 20 Year | 4.99% APR",
      interestRate: 4.99,
      dealerFee: 0.14,
      termLength: 20,
      id: 8,
    },
    {
      loanName: "NRG LoanPal 20 Year | 5.99% APR",
      interestRate: 5.99,
      dealerFee: 0.0975,
      termLength: 20,
      id: 9,
    },
    {
      loanName: "NRG LoanPal 25 Year | 2.99% APR",
      interestRate: 2.99,
      dealerFee: 0.2205,
      termLength: 25,
      id: 10,
    },
    {
      loanName: "NRG LoanPal 25 Year | 3.99% APR",
      interestRate: 3.99,
      dealerFee: 0.2009,
      termLength: 25,
      id: 11,
    },
    {
      loanName: "NRG LoanPal 25 Year | 4.49% APR",
      interestRate: 4.49,
      dealerFee: 0.1799,
      termLength: 25,
      id: 12,
    },
    {
      loanName: "NRG LoanPal 25 Year | 4.99% APR",
      interestRate: 4.99,
      dealerFee: 0.1539,
      termLength: 25,
      id: 13,
    },
    {
      loanName: "NRG LoanPal 25 Year | 5.99% APR",
      interestRate: 5.99,
      dealerFee: 0.1049,
      termLength: 25,
      id: 14,
    },
    {
      loanName: "NRG LoanPal 25 Year | 6.99% APR",
      interestRate: 6.99,
      dealerFee: 0.0549,
      termLength: 25,
      id: 15,
    },
    {
      loanName: "NRG LoanPal 20 Year | 3.74% APR",
      interestRate: 3.74,
      dealerFee: 0.1849,
      termLength: 20,
      id: 16,
    },
    {
      loanName: "NRG LoanPal 10 Year | 2.99% APR",
      interestRate: 2.99,
      dealerFee: 0.1699,
      termLength: 10,
      id: 17,
    },
    {
      loanName: "NRG LoanPal 10 Year | 7.99% APR",
      interestRate: 7.99,
      dealerFee: 0,
      termLength: 10,
      id: 18,
    },
    {
      loanName: "NRG Sunnova 10 Year | 3.99% APR",
      interestRate: 3.99,
      dealerFee: 0.1859,
      termLength: 10,
      id: 19,
    },
    {
      loanName: "NRG Sunnova 10 Year | 4.99% APR",
      interestRate: 4.99,
      dealerFee: 0.1459,
      termLength: 10,
      id: 20,
    },
    {
      loanName: "NRG Sunnova 10 Year | 4.49% APR",
      interestRate: 4.49,
      dealerFee: 0.2009,
      termLength: 10,
      id: 21,
    },
    {
      loanName: "NRG Sunnova 10 Year | 5.49% APR",
      interestRate: 5.49,
      dealerFee: 0.1709,
      termLength: 10,
      id: 22,
    },
    {
      loanName: "NRG Sunnova 25 Year | 3.99% APR",
      interestRate: 3.99,
      dealerFee: 0.1959,
      termLength: 25,
      id: 23,
    },
    {
      loanName: "NRG Sunnova 25 Year | 5.99% APR",
      interestRate: 5.99,
      dealerFee: 0.1309,
      termLength: 25,
      id: 24,
    },
  ];

  const calculate = () => {
    setIsLoading(!isLoading);

    const preTotal = pricePerWatt * systemSize;
    const total = preTotal * 1000;
    const totalAfterDownPay = total - downPayment;
    const avgRemaining = ((electricBill / 100) * offset).toFixed(2);

    setTotalSystemPrice(totalAfterDownPay);
    setRemainingBill(electricBill - avgRemaining);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="Calculator">
      <h2>Solar Calculator</h2>
      <div className="calc-variables--container">
        <p className="calc--title">Variables</p>
        <div className="calc-inputs">
          <div className="calc-input">
            <label htmlFor="lights">LED Light Package</label>
            <select
              value={lights}
              onChange={(e) => {
                setLights(e.target.value);
              }}
              name="lights"
              id="lights"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="calc-input">
            <label htmlFor="waterHeater">Water Heater</label>
            <select
              value={waterHeater}
              onChange={(e) => {
                setWaterHeater(e.target.value);
              }}
              name="waterHeater"
              id="waterHeater"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="calc-input">
            <label htmlFor="sprayFoam">Spray Foam Insulation</label>
            <select
              value={sprayFoam}
              onChange={(e) => {
                setSprayFoam(e.target.value);
              }}
              name="sprayFoam"
              id="sprayFoam"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="calc-input">
            <label htmlFor="curbEnergy">Curb Energy</label>
            <select
              value={curbEnergy}
              onChange={(e) => {
                setCurbEnergy(e.target.value);
              }}
              name="curbEnergy"
              id="curbEnergy"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="calc-input">
            <label htmlFor="nests">Nests</label>
            <select
              value={nests}
              onChange={(e) => {
                setNests(e.target.value);
              }}
              name="nests"
              id="nests"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="calc-input">
            <label htmlFor="pumps">Pool Pumps</label>
            <select
              value={pumps}
              onChange={(e) => {
                setPumps(e.target.value);
              }}
              name="pumps"
              id="pumps"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="calc-input">
            <label htmlFor="aeroseals">Aeroseal</label>
            <select
              value={aeroseals}
              onChange={(e) => {
                setAeroseals(e.target.value);
              }}
              name="aeroseals"
              id="aeroseals"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="calc-input">
            <label htmlFor="others">Other Adders $</label>
            <input
              type="number"
              value={otherAdders}
              onChange={(e) => {
                setOtherAdders(e.target.value);
              }}
            />
          </div>
          <div className="calc-input">
            <label htmlFor="groundMount">Ground Mount</label>
            <select
              value={groundMount}
              onChange={(e) => {
                setGroundMount(e.target.value);
              }}
              name="groundMount"
              id="groundMount"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>
      </div>
      <div className="calc-pricing--container">
        <p className="calc--title">Pricing</p>
        <div className="calc-inputs">
          <div className="calc-input">
            <label htmlFor="ppw">Price Per Watt $</label>
            <input
              value={pricePerWatt}
              onChange={(e) => {
                setPricePerWatt(e.target.value);
              }}
              type="currency"
              min="0.00"
              step="0.01"
            />
          </div>
          <div className="calc-input">
            <label htmlFor="electricBill">Current Avg Electric Bill $</label>
            <input
              value={electricBill}
              onChange={(e) => {
                setElectricBill(e.target.value);
              }}
              type="number"
              min="0.00"
              step="0.01"
            />
          </div>
          <div className="calc-input">
            <label htmlFor="systemSize">System Size</label>
            <input
              value={systemSize}
              onChange={(e) => {
                setSystemSize(e.target.value);
              }}
              type="number"
              step="0.001"
            />{" "}
            <span className="span">kW</span>
          </div>
          <div className="calc-input">
            <label htmlFor="offset">Overall Off-Set</label>
            <input
              value={offset}
              onChange={(e) => {
                setOffset(e.target.value);
              }}
              type="number"
            />
          </div>
          <div className="calc-input">
            <label htmlFor="downPayment">Down Payment</label>
            <input
              value={downPayment}
              onChange={(e) => {
                setDownPayment(e.target.value);
              }}
              type="number"
              min="0.00"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          calculate();
        }}
        className="calc-button"
        disabled={isLoading}
      >
        Calculate
      </button>
      {isLoading ? (
        <FontAwesomeIcon className="Spinner" icon={faSyncAlt} spin />
      ) : (
        <React.Fragment>
          <div className="calc-details">
            <p>Total System Price: ${totalSystemPrice.toLocaleString()}</p>
            <p>
              Estimated Remaining Electric Bill (Excluding Connection Fees): $
              {remainingBill}
            </p>
          </div>
          <div className="finance-headings">
            <p>Commission</p>
            <p>First 18</p>
            <p>Remaining</p>
            <p>W/O Tax Creds</p>
          </div>

          <div className="financing">
            {financingList.map((financeItem) => {
              const x = pricePerWatt - 2.75;
              let adders = 0;
              if (lights === "yes") {
                adders += 250;
              }
              if (waterHeater === "yes") {
                adders += 2000;
              }
              if (sprayFoam === "yes") {
                adders += 3000;
              }
              if (curbEnergy === "yes") {
                adders += 650;
              }
              if (nests > 0) {
                const nestTotal = 250 * nests;
                adders += nestTotal;
              }
              if (pumps > 0) {
                const pumpTotal = 2500 * pumps;
                adders += pumpTotal;
              }
              if (parseInt(aeroseals) === 1) {
                adders += 1500;
              }
              if (parseInt(aeroseals) === 2) {
                adders += 2500;
              }
              if (parseInt(aeroseals) === 3) {
                adders += 3000;
              }
              if (otherAdders > 0) {
                adders = adders + parseInt(otherAdders);
              }
              if (groundMount === "yes") {
                adders += 1;
              }

              return (
                <FinanceListItem
                  name={financeItem.loanName}
                  dealerFee={financeItem.dealerFee}
                  pricePerWatt={x}
                  systemSize={systemSize}
                  adders={adders}
                  total={totalSystemPrice}
                  key={financeItem.id}
                  id={financeItem.id}
                />
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Calculator;
