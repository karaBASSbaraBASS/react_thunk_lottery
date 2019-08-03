import React from 'react'

const FlipCard = ({ title, text }) => {
  return (
    <div  className="flip-card">
        <div  className="flip-card-inner">
            <div  className="flip-card-front">
                <h3>{title}</h3>
            </div>
            <div  className="flip-card-back">
                <p>{text}</p> 
            </div>
        </div>
    </div>
  )
}
export default FlipCard;