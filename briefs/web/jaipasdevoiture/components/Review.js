import React from 'react'

export default function Review({ text, user, rating, link }) {
    return (
        <div class="review">
            <div className="review-text">{text}</div>
            <div className="review-user">{user}</div>
            <div className="review-rating">{rating}</div>
            <div className="review-link">{link}</div>
        </div>
    )
}
