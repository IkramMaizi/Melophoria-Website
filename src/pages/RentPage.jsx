import React from 'react'
import './RentPage.css'
import Navigation from ".././components/navigation.jsx"
import InstrumentsCard from ".././components/InstrumentsCard.jsx"
import {Link, NavLink} from "react-router-dom"
import InstImg from "../assets/inst-img.jpg"

export default function RentPage() {
  const [Instruments, SetInstruments] = React.useState([{
    name: "Piano original P12",
    price: "22$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
  },
  {
    name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
  },
{
  name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
},
{
  name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
},
{
  name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
},
{
  name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
},
{
  name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
},
{
  name: "Guitar GP45",
    price: "25$",
    image: InstImg,
    description: "Instuments details here bla bla blaaa hdh ghe bc jzjkddnn nc dhh another text bla blaa hfdh "
}])

  const InstrumentsCards= Instruments.map((inst) => (
      <InstrumentsCard inst= {inst}/>
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
