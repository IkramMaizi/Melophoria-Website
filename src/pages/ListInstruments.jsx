import React from 'react'
import "./ListInstruments.css"
import Button from "../components/Button"
import InstrumentsCard from '../components/InstrumentsCard'
import InstImg from "../assets/inst-img.jpg"
import Popup from '../components/Popup'
import db from "../database.jsx"

export default function ListInstruments() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);
  return (
    
    <div className="list-instruments">
      {isOpen && <Popup text="You can't add Instruments yet!" closeButtonText="Okay" close={closeModal} /> }
        <div className="header">
            <div className="title">Your Listed Instruments</div>
            <Button text="Add Instrument" onclick={openModal} />
        </div>
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
  )
}
