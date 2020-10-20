import React from 'react'

export default function Presentation({ id, title, text }) {
    return (
        <div id={id}>
            <div id="presentation-title">{title}</div>
            <div id="presentation-text">{text}</div>
        </div>
    )
}
