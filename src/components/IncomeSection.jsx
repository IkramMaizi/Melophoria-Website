import React from 'react'
import "./IncomeSection.css"
import Button from ".././components/Button.jsx"

export default function IncomeSection(props) {
  return (
    <div className="income--section">
      <div className="income-details">
        <div className="total-income">
            <p className="text">Total Income</p>
            <p className="number">1200$</p>

        </div>
        <div className="current-balance">
            <p className="text">Current Balance</p>
            <p className="number">1000$</p>
        </div>
        <div className="last-month">
            <p className="text">Last 30 Days</p>
            <p className="number">100$</p>
        </div>
        </div>
        { props.type== "withdraw" && <div className="wthdrw--section">
        <Button className="wdthrw--btn" text="Widthdraw Money" linkTO="/"/></div>}
        </div>
  )
}
