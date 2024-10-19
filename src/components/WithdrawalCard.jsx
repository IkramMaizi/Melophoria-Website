import React from 'react'
import "./WithdrawalCard.css"

export default function WithdrawalCard(props) {
  return (
    <div className="withdrawal--card">
            <div className="account">
                <div className="visa">Visa</div>
                <div className="number">{props.accountNum}</div>
            </div>
            <div className="amount">
                <p>{props.amount}</p>
            </div>
            <div className="date">
                <div className="day">{props.date}</div>
                <div className="time">{props.time}</div>
            </div>
        </div>
  )
}
