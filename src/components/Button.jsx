import React from 'react'
import './Button.css'
import {Link} from "react-router-dom"

export default function Button(props) {
  return (
    <Link to={props.linkTo}>
    <button className="callToActionBtn">{props.text}</button>
    </Link>
  )
}
