import React from 'react'
import "./AboutUsPage.css"
import Navigation from "../components/navigation"
import Footer from "../components/Footer"
import logo from "../assets/logo2.png"

export default function AboutUsPage() {
  return (
    <>
    <div className= "about-us--page">
        <Navigation />
        <div className="desc--section">
        <img src={logo} alt="" />
        <p className="desc">Melophoria is a platform designed to connect musicians by offering an easy way to rent and list musical instruments. Whether you're looking to rent an instrument or share yours with others, we make the process simple and accessible. Our goal is to create a community where musicians can find the gear they need, explore new sounds, and make music more affordable for everyone.</p>
        </div>
    </div>
    <Footer />
    </>
  )
}
