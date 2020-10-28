import React from 'react'
import PreviewPanel from './PreviewPanel';
import Profile from './profile/Profile';
import FetchForm from './forms/FetchForm';

const api = "https://pokeapi.co/api/v2/";



export default class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingUrl: props.loadingUrl,
            pokemon: {
                id: 0,
                name: "Vivien",
                height: 183,
                weight: 80,
                base_experience: 0,
                sprites: {
                    front_default: ""
                },
                types: [{
                    type: {
                        name: "normal"
                    }
                },
                ],
                stats: [
                    { "base_stat": 50, stat: { name: "html" } },
                    { "base_stat": 50, stat: { name: "css" } },
                    { "base_stat": 50, stat: { name: "javascript" } },
                    { "base_stat": 50, stat: { name: "java" } },
                ]
            },
            pokemons: {},
            isOn: false,
            action: api,
            limit: 150,
            offset: 0,
            localstorageMessage: ""
        }

        this.fetchPokemon = this.fetchPokemon.bind(this);
        this.fetchPokemons = this.fetchPokemons.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFetch = this.handleFetch.bind(this);

    }

    componentDidMount() {
        if (localStorage.getItem("pokemons")) {
            this.setState({ localstorageMessage: "Pokemons retrieved from localStorage" });
        }

        this.setState({ pokemons: JSON.parse(localStorage.getItem('pokemons')) });
    }

    fetchPokemons({ limit, offset }) {
        fetch(`${api}pokemon?limit=${limit}&offset=${offset}`)
            .then(this.toJson)
            .then(this.fetchPokemon);
    }

    fetchPokemon(list) {
        if (!list) return null;

        let poks = {};

        Promise.all(list.results
            .map(pok => fetch(pok.url)
                .then(this.toJson)
                .then((data) => poks[data.name] = data))
        ).then(() => {
            this.setState({ pokemons: poks });

            for (let p in poks) {
                delete poks[p].abilities;
                delete poks[p].forms;
                delete poks[p].held_items;
                delete poks[p].moves;
            }

            localStorage.setItem("pokemons", JSON.stringify(poks));
            this.setState({ localstorageMessage: "Pokemons saved in localStorage" });
        })

    }

    toJson(res) {
        return res.ok ? res.json() : null;
    }

    handleClick(e) {
        let pokemon = this.state.pokemons[e.currentTarget.id];
        this.setState({ pokemon: pokemon });
        this.setState({ isOn: !this.state.isOn });
        setInterval(() => this.handleClick, 500);
    }

    handleFetch(of, lim) {
        this.fetchPokemons({ limit: lim, offset: of });
    }

    render() {
        return (
            <div className="Pokedex" >
                <div id="up">
                    <FetchForm action={this.state.action} offset={this.state.offset} limit={this.state.limit} handleFetch={this.handleFetch} localstorageMessage={this.state.localstorageMessage} />
                </div>
                <div id="down">
                    <div id="left">
                        <Profile pokemon={this.state.pokemon} isOn={this.state.isOn} />
                    </div>
                    <div id="right">
                        <PreviewPanel
                            pokemons={this.state.pokemons}
                            loadingUrl={this.state.loadingUrl}
                            action={this.state.action}
                            offset={this.state.offset}
                            limit={this.state.limit}
                            handleClick={this.handleClick}
                            handleFetch={this.handleFetch}
                            localstorageMessage={this.state.localstorageMessage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
