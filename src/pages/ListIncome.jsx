import React from 'react'
import "./ListIncome.css"
import IncomeSection from '../components/IncomeSection'
import WithdrawalCard from "../components/withdrawalCard"


export default function ListIncome() {
  
  return (
    <div className="list-income">
    <IncomeSection type="withdraw"/>
    <div className="withdraw-history">
        <div className="title">
            Recent Withdrawals
        </div>
        <div className="withdrawal-cards">
        <WithdrawalCard 
        accountNum="*******342"
        amount="200$"
        date="27/06/2024"
        time="22:00 pm"
        />
        <WithdrawalCard 
        accountNum="*******342"
        amount="50$"
        date="11/11/2024"
        time="22:23 pm"
        />
        <WithdrawalCard 
        accountNum="*******342"
        amount="220$"
        date="12/09/2024"
        time="11:23 pm"
        />
        </div>
    </div>
    </div>
  )
}
