import React from 'react'
import './RentPage.css'
import Navigation from ".././components/navigation.jsx"
import Footer from ".././components/Footer.jsx"
import InstrumentsCard from ".././components/InstrumentsCard.jsx"
import {Link, NavLink, useSearchParams} from "react-router-dom"
import InstImg from "../assets/inst-img.jpg"
import database from "../database.jsx"

export default function RentPage() {
  const [Instruments, SetInstruments] = React.useState(database())
  const [searchParams, SetsearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  console.log(typeFilter)
  console.log(Instruments[3].type)

  const displayedCards = typeFilter ? Instruments.filter((inst)=>(inst.type===typeFilter)) : Instruments

  const InstrumentsCards= displayedCards.map((inst) => (
      <InstrumentsCard 
      id= {inst.id}
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
        <Link  to="?type=guitar" className="filter 1">
          <p>Guitar</p>
        </Link>
        <Link to="?type=piano" className="filter 2">
          <p>Piano</p>
        </Link>
        <Link to="?type=drum" className="filter 3">
          <p>Drum</p>
        </Link>
        <Link to="?type=flute" className="filter 4">
          <p>Flute</p>
        </Link>
        <Link to="?type=voilin" className="filter 5">
          <p>Voilin</p>
        </Link>
        <Link to="?type=sexaphone" className="filter 6">
          <p>Sexaphone</p>
        </Link>
        <Link to="." className="clear-filters">clear filters</Link>
      </div>
      <div className="cards--container">
      {InstrumentsCards}
      </div>
      </div>
      <Footer />
     </>
  )
}
