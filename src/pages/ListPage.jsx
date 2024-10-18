import React from 'react'
import "./ListPage.css"
import Footer from "../components/Footer.jsx"
import Navigation from "../components/navigation.jsx"
import ListNavigation from "../components/ListNavigation.jsx"
import IncomeSection from "../components/IncomeSection.jsx"
import InstrumentsCard from "../components/InstrumentsCard"
import InstImg from "../assets/inst-img.jpg"

export default function ListPage() {
  return (
    <>
    <div className= "list--page">
        <Navigation />
        <ListNavigation />
        <IncomeSection type="dashboard"/>
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
    <Footer />
    </>
  )
}
