import React from 'react'
import './GrowthCard.css'

const GrowthCard = ({ percent, title, details }) => {
    return (
        <div className="features__bottom-box">
            <h3>{percent}</h3>
            <h4>{title}</h4>
            <p>
                {details}
            </p>
        </div>
    )
}

export default GrowthCard;