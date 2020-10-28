import React from 'react'

export default function StatBar({ id, text, current, max, color }) {

    const classes = ["type", "statBar", color].join(" ");

    const style = {
        width: Math.round(current / max * 100) + "%",
        color: "white",
        padding: "5px",
        fontSize: ".85em"
    }

    return (
        <div className="statContainer" width="100%">
            <div className="description">{text}</div>
            <div className={classes} style={style}>{current}</div>
        </div>
    )
}
