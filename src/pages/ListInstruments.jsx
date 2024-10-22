import React from 'react'
import "./ListInstruments.css"
import Button from "../components/Button"
import InstrumentsCard from '../components/InstrumentsCard'
import InstImg from "../assets/inst-img.jpg"
import Popup from '../components/Popup'


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
