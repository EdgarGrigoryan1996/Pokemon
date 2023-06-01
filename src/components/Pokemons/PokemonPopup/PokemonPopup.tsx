import React, {Dispatch, FC, SetStateAction} from 'react';
import s from "../Pokemons.module.css";
import {capitalizeFirstLetter} from "../../../utils/helpFunctions/capitalizeFirstLetter";
import {useDispatch} from "react-redux";
import {deleteCurrentPokemonInfo} from "../../../features/Pokemons/pokemonsSlice";
import {Pokemon} from "../../../types/pokemon";

interface Props {
    setPokemonPopupStatus: Dispatch<SetStateAction<boolean>>;
    pokemon: Pokemon
}

const PokemonPopup: FC<Props> = (props) => {
    const dispatch = useDispatch()

    return (
        <div className={s.pokemonPopup}>
            <div className={s.popupBlock}>

                <div className={s.closePopup}>
                    <span onClick={() => {
                        dispatch(deleteCurrentPokemonInfo())
                        props.setPokemonPopupStatus(false)
                    }}>x</span>
                </div>

                <div className={s.pokemonHeader}>
                    <div className={s.pokemonImage}>
                        <img src={props.pokemon.sprites.other.dream_world.front_default} alt={props.pokemon.name}/>
                    </div>
                    <div className={s.pokemonName}>
                        <h1>{capitalizeFirstLetter(props.pokemon.name)}</h1>
                        <div className={s.info}>
                            <div className={s.infoItem}>
                                <h2>Weight</h2>
                                <div className={s.infoValue}>{props.pokemon.weight + "kg"}</div>
                            </div>
                            <div className={s.infoItem}>
                                <h2>Height</h2>
                                <div className={s.infoValue}>{props.pokemon.height}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.types}>
                    {props.pokemon.types.map((type) => {

                        return (
                            <div key={type.type.url}>{type.type.name}</div>
                        )

                    })}
                </div>

                <div className={s.stats}>
                    {props.pokemon.stats.map((poke) => {

                        return (
                            <div className={s.stat} key={poke.stat.url}>
                                <div>{poke.stat.name}</div>
                                <div>{poke.base_stat}</div>
                            </div>
                        )

                    })}
                </div>

            </div>
        </div>
    );
}

export default PokemonPopup;