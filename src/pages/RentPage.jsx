import React from 'react'
import './RentPage.css'
import Navigation from ".././components/navigation.jsx"
import Footer from ".././components/Footer.jsx"
import InstrumentsCard from ".././components/InstrumentsCard.jsx"
import {Link, NavLink} from "react-router-dom"
import InstImg from "../assets/inst-img.jpg"
import database from "../database.jsx"

export default function RentPage() {
  const [Instruments, SetInstruments] = React.useState(database)

  const InstrumentsCards= Instruments.map((inst) => (
      <InstrumentsCard 
      name= {inst.name}
      image= {inst.image}
      price= {inst.price}
      />
    )
  )
  return (
    <>
      <div className="rent-page">
       <Navigation />
      <h2 className="rent-list--title">Explore Our Instruments Options</h2>
      <div className="filters--container">
        <Link className="filter 1">
          <p>Guitar</p>
        </Link>
        <Link className="filter 2">
          <p>Piano</p>
        </Link>
        <Link className="filter 3">
          <p>Drum</p>
        </Link>
        <Link className="filter 4">
          <p>Flute</p>
        </Link>
        <Link className="filter 5">
          <p>Voilin</p>
        </Link>
        <Link className="filter 6">
          <p>Sexaphone</p>
        </Link>
        <Link className="clear-filters">clear filters</Link>
      </div>
      <div className="cards--container">
      {InstrumentsCards}
      </div>
      </div>
      <Footer />
     </>
  )
}
