import React from 'react'
import logo from "../assets/logo.png"
import heroImage from "../assets/hero-image.png"
import Button from ".././components/Button.jsx"
import categoryImage1 from "../assets/hero-image1.png"
import categoryImage2 from "../assets/hero-image2.png"
import categoryImage3 from "../assets/hero-image3.png"
import categoryImage4 from "../assets/hero-image4.png"
import categoryImage5 from "../assets/hero-image5.png"
import categoryImage6 from "../assets/hero-image6.png"
import {Link} from "react-router-dom"

export default function HomePage() {
  return (
    <div className="app">
    <section className="section--1">
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="menu">
            <li>Home</li>
            <li>Rent</li>
            <li>List</li>
            <li>About us</li>

        </ul>
    </nav>
    <div className="hero">
    <img src={heroImage} alt="logo" className="hero--image" />
    <div className="hero--text">
        <h2 className="title">Rent Your Favorite Musical Instrument with Ease</h2>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button text="get started"></Button>
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
          <Link to="/" className="category--card">
            <img src={categoryImage1} alt="" className="card--image" />
            </Link>  
          <Link to="/" className="category--card">
            <img src={categoryImage2} alt="" className="card--image" />
            </Link>  
          <Link to="/" className="category--card">
            <img src={categoryImage3} alt="" className="card--image" />
            </Link>  
          <Link to="/" className="category--card">
            <img src={categoryImage4} alt="" className="card--image" />
            </Link>  
          <Link to="/" className="category--card">
            <img src={categoryImage5} alt="" className="card--image" />
            </Link>  
          <Link to="/" className="category--card">
            <img src={categoryImage6} alt="" className="card--image" />
            </Link>  
        </div>
    </section>
    <footer>
      <p>All Rights Reserved 2024</p>
    </footer>
    </div>
  )
}
