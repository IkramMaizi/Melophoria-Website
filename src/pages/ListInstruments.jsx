import React from 'react'
import "./ListInstruments.css"
import Button from "../components/Button"
import InstrumentsCard from '../components/InstrumentsCard'
import InstImg from "../assets/inst-img.jpg"

export default function ListInstruments() {
  return (
    <div className="list-instruments">
        <div className="header">
            <div className="title">Your Listed Instruments</div>
            <Button text="Add Instrument" linkTo="/" />
        </div>
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
  )
}
