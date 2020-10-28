import React from 'react'

export default function Type({ slot, name, url }) {

    const cn = "type " + name;

    return (<a href={url} className={cn}>{name.toUpperCase()}</a>)
}
