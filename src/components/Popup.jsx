import React from 'react'
import "./Popup.css"

export default function Popup(props) {

    
    return (
    
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{props.text}</p>
            <button onClick={props.close}>{props.closeButtonText}</button>
          </div>
        </div>
      
    )
}
