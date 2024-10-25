import React from 'react'
import heroImage from "../assets/hero-image.png"
import Button from ".././components/LinkButton.jsx"
import Navigation from "../components/navigation.jsx"
import Footer from "../components/Footer.jsx"
import categoryImage1 from "../assets/hero-image1.png"
import categoryImage2 from "../assets/hero-image2.png"
import categoryImage3 from "../assets/hero-image3.png"
import categoryImage4 from "../assets/hero-image4.png"
import categoryImage5 from "../assets/hero-image5.png"
import categoryImage6 from "../assets/hero-image6.png"
import {Link, NavLink} from "react-router-dom"
import './HomePage.css'

export default function HomePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="app">
    <section className="section--1">
    <Navigation />
    <div className="hero">
    <img src={heroImage} alt="logo" className="hero--image" />
    <div className="hero--text">
        <h2 className="title">Rent Your Favorite Musical Instrument with Ease</h2>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button text="get started" linkTo="rent" />
    </div>
    </div>
    </section>
    <section className="section--2">
        <h2 className="title">
        Discover Our Categories
        </h2>
        <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>
        <div className="grid-container">
          <Link to="/rent?type=guitar" className="category--card">
            <img src={categoryImage1} alt="" className="card--image" />
            </Link>  
          <Link to="/rent?type=piano" className="category--card">
            <img src={categoryImage2} alt="" className="card--image" />
            </Link>  
          <Link to="/rent?type=voilin" className="category--card">
            <img src={categoryImage3} alt="" className="card--image" />
            </Link>  
          <Link to="/rent?type=sexaphone" className="category--card">
            <img src={categoryImage4} alt="" className="card--image" />
            </Link>  
          <Link to="/rent?type=drum" className="category--card">
            <img src={categoryImage5} alt="" className="card--image" />
            </Link>  
          <Link to="/rent?type=flute" className="category--card">
            <img src={categoryImage6} alt="" className="card--image" />
            </Link>  
          
        </div>
    </section>
    <Footer />
    
    </div>
  )
}
