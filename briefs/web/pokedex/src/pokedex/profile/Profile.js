import React from 'react'
import ProfileTitle from './ProfileTitle';
import InlineDescription from './InlineDescription';
import Type from './Types';
import StatBar from './StatBar';

import uuid from 'uuid';


export default function Profile({ pokemon, isOn }) {
    if (!pokemon) return (<div className="profile"> </div >)

    let profClasses = ["profile", isOn ? "on" : "off"];

    return (
        <div className={profClasses.join(" ")} hidden={!pokemon} style={{ backgroundImage: `url("${pokemon.sprites.front_default}")` }}>

            <div className="bgImg" ></div>

            <ProfileTitle id={pokemon.id} name={pokemon.name} headerOn={{ isOn }} type={pokemon.types[0].type.name} />

            <InlineDescription k="Types" v={pokemon.types.map(t => <Type key={uuid.v4()} name={t.type.name} ulr={t.type.url} />)} />

            <InlineDescription k="Base XP" v={pokemon.base_experience} />

            <InlineDescription k="Height" v={pokemon.height} />

            <InlineDescription k="Weight" v={pokemon.weight} />

            <div className="statsContainer">
                {pokemon.stats.map(s => <StatBar key={uuid.v4()} id={s.name} current={s.base_stat} max={255} text={s.stat.name.replace("-", " ")} color={pokemon.types[0].type.name} />)}
            </div>

            {/* 
            < div clas="data">
                <div className="data-title">Abilities</div>
                <div id="pkm_abilities" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title"></div>
                <div id="pkm_base_experience" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">forms</div>
                <div id="pkm_forms" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">game_indices</div>
                <div id="pkm_game_indices" className="data-values"></div>
            </div>

            <div clas="data">
                <div className="data-title">held_items</div>
                <div id="pkm_held_items" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">is_default</div>
                <div id="pkm_is_default" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">location_area_encounters</div>
                <div id="pkm_location_area_encounters" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">moves</div>
                <div id="pkm_moves" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">order</div>
                <div id="pkm_order" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">species</div>
                <div id="pkm_specie" className="data-values"></div>
            </div>
            <div clas="data">
                <div className="data-title">sprites</div>
                <div id="pkm_sprites" className="data-values"></div>
            </div>
 */}
        </div >
    )
}
