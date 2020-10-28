import React from 'react'

export default function InlineDescription({ k, v }) {
    return (
        <div className="inline-description">
            <div className="key">{k.charAt(0).toUpperCase() + k.slice(1)}</div>
            <div className="value">{v}</div>
        </div>
    )
}
