import React from 'react'
import "./InstrumentsCard.css"
import { Link } from 'react-router-dom'

export default function InstrumentsCard(props) {
  return (
    <Link to="1">
    <div className="instrument-card">
      <img src={props.image} className="card--image" alt="" />
      <div className="card-details">
      <h3>{props.name}</h3>
      <p>{props.price}</p> 
      </div>
      </div>
      </Link>
  )
}

