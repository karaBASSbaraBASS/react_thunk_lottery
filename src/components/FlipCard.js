import React from 'react'

const FlipCard = ({ title, text }) => {
  return (
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h3>{title}</h3>
            </div>
            <div class="flip-card-back">
                <p>{text}</p> 
            </div>
        </div>
    </div>
  )
}
export default FlipCard;