import React from 'react'

export default function ProfileTitle({ name, id, headerOn, type }) {

    const prefixZero = (id) => {
        const len = id.toString().length;
        if (len === 1) return "00" + id;
        if (len === 2) return "0" + id;
        return id;
    }

    const classes = ["header", "type", type, (headerOn.isOn) ? "on" : "off"].join(" ");

    return (
        <div className={classes}>
            <div className="name">{name.charAt(0).toUpperCase() + name.slice(1)} n° {prefixZero(id)}</div>
        </div >
    )

}
