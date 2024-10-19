import React from 'react'
import "./AboutUsPage.css"
import Navigation from "../components/navigation"
import Footer from "../components/Footer"

export default function AboutUsPage() {
  return (
    <>
    <div className= "about-us--page">
        <Navigation />
        <h4 style={
           {textAlign: "center",
            paddingTop: "3rem"
           }
        }> About Us Page </h4>
    </div>
    <Footer />
    </>
  )
}
