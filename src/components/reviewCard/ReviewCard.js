import React from 'react'
import './ReviewCard.css'

const ReviewCard = ({ review, author, position }) => {
    return (
        <div className="clients__testimonials">
            <div className="clients__testimonials-logo">

            </div>
            <div className="clients__testimonials-review">
                <p>
                    {review}
                </p>
            </div>
            <div className="clients__testimonials-reviewer">
                <div className="reviewer__img">

                </div>
                <div className="reviewer__title">
                    <h4>{author}</h4>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;