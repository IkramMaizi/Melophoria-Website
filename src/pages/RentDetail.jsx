import React from 'react'
import { useState } from "react";
import "./RentDetail.css"
import Navigation from ".././components/navigation.jsx"
import InstImg from "../assets/inst-img.jpg"
import Button from "../components/Button.jsx"
import InstrumentsCard from ".././components/InstrumentsCard.jsx"
import Footer from "../components/Footer.jsx"
import Popup from "../components/Popup.jsx"


export default function RentDetail() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);


  return (
    <>
    <div className="rent-detail--page">
        <Navigation />

        {isOpen && <Popup text="Instrument Rented!" closeButtonText="Okay" close={closeModal} /> }

        <div className="detail--section">
            <div className="text--section">
            <h2 className="name">Guitar GP45 PRO</h2>
            <h3 className="price">15$/day</h3>
            <p className="description">Lorem ipsum dolor sit amet. Et debitis ratione qui maxime ipsum est debitis mollitia sed quaerat sunt aut rerum accusantium aut quia rerum. Hic dolores sunt et voluptatem quia a quia quia sit autem molestiae ab nesciunt harum est error rerum aut repudiandae architecto.</p>
            <Button text="Rent" onclick={openModal} />
            </div>
            <div className="image--section">
            <img src={InstImg} alt="" /></div>
        </div>
        <div className="options--section">
            <h2 className="title">Explore Similar Options</h2>
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
    <Footer /></>
  )
}
