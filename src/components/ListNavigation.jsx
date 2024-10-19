import React from 'react'
import "./ListNavigation.css"
import { NavLink } from 'react-router-dom'

export default function ListNavigation() {
  return (
    <div className= "navbar2">
        <ul className="menu2">
            <NavLink to="." className="nav2--elem">Dashboard</NavLink>
            <NavLink to="Income" className="nav2--elem">Income</NavLink>
            <NavLink to="Instruments" className="nav2--elem">Instruments</NavLink>
            <NavLink to="Reviews" className="nav2--elem">Reviews</NavLink>

        </ul>

        
    </div>
  )
}
