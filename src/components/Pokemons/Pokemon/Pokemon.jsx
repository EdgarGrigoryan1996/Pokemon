import React from 'react';
import s from "./Pokemon.module.css"
function Pokemon(props) {
    return (
        <div className={s.pokemonBlock} onClick={() => {
            props.setCurrentPokemon(props.pokemon)
            props.openPokemonInfo(true)
        }}>
            <div className={s.pokemonImage}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.pokemon.id}.png`} alt={props.pokemon.name}/>
            </div>
            <div className={s.pokemonName}>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</div>
        </div>
    );
}

export default Pokemon;