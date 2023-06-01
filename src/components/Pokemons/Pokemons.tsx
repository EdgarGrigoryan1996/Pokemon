import React, {FC, useState} from 'react';
import Pokemon from "./Pokemon/Pokemon";
import s from "./Pokemons.module.css"
import PokemonPopup from "./PokemonPopup/PokemonPopup";
import {useDispatch, useSelector} from "react-redux";
import {showCurrentPokemonInfo} from "../../features/Pokemons/pokemonsSlice";
import {Abilitiy} from "../../types/pokemon";
import {AppDispatch, RootState} from "../../app/store";

interface Props {
    pokemons: Abilitiy[]
}

const Pokemons: FC<Props> = (props) => {
    const dispatch:AppDispatch = useDispatch()
    const [pokemonPopupStatus, setPokemonPopupStatus] = useState(false)

    const currentPokemon = useSelector((state: RootState) => {
        return state.pokemons.currentPokemonInfo
    })

    return (
        <div className={s.pokemonsBlock}>

            {(pokemonPopupStatus && currentPokemon) &&
                <PokemonPopup setPokemonPopupStatus={setPokemonPopupStatus} pokemon={currentPokemon}/>}

            {props.pokemons.map((pokemon: Abilitiy) => {

                return (
                    <Pokemon key={pokemon.url} name={pokemon.name} onclick={() => {
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