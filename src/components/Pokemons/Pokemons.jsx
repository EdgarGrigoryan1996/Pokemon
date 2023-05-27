import React, {useState} from 'react';
import Pokemon from "./Pokemon/Pokemon";
import s from "./Pokemons.module.css"
import PokemonPopup from "./PokemonPopup/PokemonPopup";

function Pokemons(props) {
    const [pokemonPopupStatus, setPokemonPopupStatus] = useState(false)
    const [currentPokemon, setCurrentPokemon] = useState(null)

    return (
        <div className={s.pokemonsBlock}>

            {pokemonPopupStatus && <PokemonPopup setPokemonPopupStatus={setPokemonPopupStatus} pokemon={currentPokemon}/>}

            {props.pokemons?.map((pokemon) => {
                return (

                    <Pokemon key={pokemon.name + pokemon.id} pokemon={pokemon} openPokemonInfo={setPokemonPopupStatus} setCurrentPokemon={setCurrentPokemon}/>
                )
            })}

        </div>
    );
}

export default Pokemons;