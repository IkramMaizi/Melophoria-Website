import React from 'react'
import './RentPage.css'
import Navigation from ".././components/navigation.jsx"
import {Link, NavLink} from "react-router-dom"
import InstImg from "../assets/inst-img.jpg"

export default function RentPage() {
  const [Instruments, SetInstruments] = React.useState([{
    name: "Piano original P12",
    price: "22$"
  },
  {
    name: "Guitar GP45",
    price: "25$"
  }])

  const InstrumentsCards= Instruments.map((inst) => (
      <div className="instrument-card">
      <img src={InstImg} className="card--image" alt="" />
      <div className="card-details">
      <h3>{inst.name}</h3>
      <p>{inst.price}</p> 
      </div>
      </div>
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
      <footer>
      <p>All Rights Reserved 2024</p>
     </footer>
     </>
  )
}
