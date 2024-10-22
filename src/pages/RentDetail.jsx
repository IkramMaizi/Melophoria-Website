import React from 'react'
import { useState } from "react";
import {useParams} from "react-router-dom"
import "./RentDetail.css"
import Navigation from ".././components/navigation.jsx"
import InstImg from "../assets/inst-img.jpg"
import Button from "../components/Button.jsx"
import InstrumentsCard from ".././components/InstrumentsCard.jsx"
import Footer from "../components/Footer.jsx"
import Popup from "../components/Popup.jsx"
import db from "../database.jsx"


export default function RentDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [inst, setInst] = useState(1);

  const id= useParams().id

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  React.useEffect(()=>{
    
  for (var i=0 ; i<db().length ; i++){
    if(db()[i].id==id){
      
      setInst(db()[id-1]);
      
    }
  }
},[id])

  // useParams().id
   
  return (
    <>
    <div className="rent-detail--page">
        <Navigation />

        {isOpen && <Popup text="Instrument Rented!" closeButtonText="Okay" close={closeModal} /> }

        <div className="detail--section">
            <div className="text--section">
            <h2 className="name">{inst.name}</h2>
            <h3 className="price">{inst.price}</h3>
            <p className="description">{inst.description}</p>
            <Button text="Rent" onclick={openModal} />
            </div>
            <div className="image--section">
            <img src={inst.image} alt="" /></div>
        </div>
        <div className="options--section">
            <h2 className="title">Explore Similar Options</h2>
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
    <Footer /></>
  )
}
