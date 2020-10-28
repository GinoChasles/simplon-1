import React from 'react'
import PreviewSquare from './PreviewSquare';
import uuid from 'uuid';

export default function PreviewPanel({ pokemons, handleClick }) {
    const squares = [];


    for (let p in pokemons) {
        squares.push(<PreviewSquare key={uuid.v4()} pokemon={pokemons[p]} size={100} handleClick={handleClick} />);
    }

    return (
        <div className="PreviewPanel">{squares}</div>
    )
}
