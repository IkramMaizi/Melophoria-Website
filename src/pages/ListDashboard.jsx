import React from 'react'
import "./ListDashboard.css"
import IncomeSection from "../components/IncomeSection.jsx"
import InstrumentsCard from "../components/InstrumentsCard"
import InstImg from "../assets/inst-img.jpg"
import db from "../database.jsx"

export default function ListDashboard() {
  return (
    <div><IncomeSection type="dashboard"/>
    <div className="listed--section">
        <div className="title">Your Listed Instruments</div>
        <div className="cards--container">
            <InstrumentsCard 
            id= {db()[1].id}
            name= {db()[1].name}
            image= {db()[1].image}
            price= {db()[1].price}
            />
            <InstrumentsCard 
            id= {db()[2].id}
            name= {db()[2].name}
            image= {db()[2].image}
            price= {db()[2].price}
            />
            <InstrumentsCard 
            id= {db()[3].id}
            name= {db()[3].name}
            image= {db()[3].image}
            price= {db()[3].price}
            />
            <InstrumentsCard 
            id= {db()[4].id}
            name= {db()[4].name}
            image= {db()[4].image}
            price= {db()[4].price}
            />
                

            </div>
    </div>
    </div>
  )
}
