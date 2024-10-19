import React from 'react'
import "./ListDashboard.css"
import IncomeSection from "../components/IncomeSection.jsx"
import InstrumentsCard from "../components/InstrumentsCard"
import InstImg from "../assets/inst-img.jpg"

export default function ListDashboard() {
  return (
    <div><IncomeSection type="dashboard"/>
    <div className="listed--section">
        <div className="title">Your Listed Instruments</div>
        <div className="cards--container">
            <InstrumentsCard 
            name= "Guitar GP45 PRO"
            image={InstImg}
            price="15$/hour"
            />
            <InstrumentsCard 
            name= "Guitar GP45 PRO"
            image={InstImg}
            price="15$/hour"
            />
            <InstrumentsCard 
            name= "Guitar GP45 PRO"
            image={InstImg}
            price="15$/hour"
            />
            <InstrumentsCard 
            name= "Guitar GP45 PRO"
            image={InstImg}
            price="15$/hour"
            />

        </div>
    </div>
    </div>
  )
}
