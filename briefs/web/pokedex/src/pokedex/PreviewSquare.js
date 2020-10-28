import React from 'react';

export default function PreviewSquare({ pokemon, size, handleClick }) {

    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const type = pokemon.types[0].type.name;

    const squareClasses = ["PreviewSquare", type].join(" ");
    const nameClasses = ["PreviewName", "type", type].join(" ");
    const imgClasses = ["PreviewImg", type].join(" ");

    return (
        <>
            <div className={squareClasses} onMouseDown={handleClick} id={pokemon.name}>

                <div className={imgClasses} style={{ backgroundImage: `url("${pokemon.sprites.front_default}")` }} ></div>
                <div className={nameClasses}>{capitalizedName}</div>
            </div>
        </>
    )
};