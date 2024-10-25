import React from 'react'
import './navigation.css'
import logo from "../assets/logo.png"
import {Link, NavLink} from "react-router-dom"
import ScrollToTop from './ScrollToTop.jsx'

export default function navigation() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="menu">
            <NavLink to="/" className="nav--elem">Home</NavLink>
            <NavLink to="/rent" className="nav--elem">Rent</NavLink>
            <NavLink to="/list" className="nav--elem">List</NavLink>
            <NavLink to="/about" className="nav--elem">About us</NavLink>

        </ul>
        <ScrollToTop />
    </nav>
  )
}
