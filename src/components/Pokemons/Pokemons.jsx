import React, {useState} from 'react';
import Pokemon from "./Pokemon/Pokemon";
import s from "./Pokemons.module.css"
import PokemonPopup from "./PokemonPopup/PokemonPopup";
import {useDispatch, useSelector} from "react-redux";
import {showCurrentPokemonInfo} from "../../features/Pokemons/pokemonsSlice.js";

function Pokemons(props) {
    const dispatch = useDispatch()
    const [pokemonPopupStatus, setPokemonPopupStatus] = useState(false)

    const currentPokemon = useSelector((state) => {
        return state.pokemons.currentPokemonInfo
    })

    return (
        <div className={s.pokemonsBlock}>

            {(pokemonPopupStatus && currentPokemon) &&
                <PokemonPopup setPokemonPopupStatus={setPokemonPopupStatus} pokemon={currentPokemon}/>}

            {props.pokemons?.map((pokemon) => {

                return (
                    <Pokemon key={pokemon.id} name={pokemon.name} onclick={() => {
                        dispatch(showCurrentPokemonInfo(pokemon))
                        setPokemonPopupStatus(true)
                    }
                    }/>
                )

            })}

        </div>
    );
}

export default Pokemons;