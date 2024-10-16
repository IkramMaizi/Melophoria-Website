import React from 'react'
import "./InstrumentsCard.css"

export default function InstrumentsCard(props) {
  return (
    <div className="instrument-card">
      <img src={props.inst.image} className="card--image" alt="" />
      <div className="card-details">
      <h3>{props.inst.name}</h3>
      <p>{props.inst.price}</p> 
      </div>
      </div>
  )
}
