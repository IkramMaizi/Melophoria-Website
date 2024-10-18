import React from 'react'
import "./ListNavigation.css"
import { NavLink } from 'react-router-dom'

export default function ListNavigation() {
  return (
    <div className= "navbar2">
        <ul className="menu2">
            <NavLink to="/" className="nav2--elem">Home</NavLink>
            <NavLink to="/rent" className="nav2--elem">Rent</NavLink>
            <NavLink to="/list" className="nav2--elem">List</NavLink>
            <NavLink to="/about" className="nav2--elem">About us</NavLink>

        </ul>

        
    </div>
  )
}
