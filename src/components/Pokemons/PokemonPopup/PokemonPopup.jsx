import React from 'react';
import s from "../Pokemons.module.css";

function PokemonPopup(props) {
    return (
        <div className={s.pokemonPopup}>
            <div className={s.popupBlock}>
                <div className={s.closePopup}><span onClick={() => {
                    props.setPokemonPopupStatus(false)
                }}>x</span></div>
                <div className={s.pokemonHeader}>
                    <div className={s.pokemonImage}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`} alt=""/>
                    </div>
                    <div>
                        <h1>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h1>
                    </div>
                </div>
                <div className={s.info}>
                    <div>
                        <h2>Category</h2>
                        <ul>
                            {props.pokemon.types.map((type) => {
                                return (
                                    <li>{type.type.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2>Weight</h2>
                        <div>{props.pokemon.weight + "kg"}</div>
                    </div>

                    <div>
                        <h2>Height</h2>
                        <div>{props.pokemon.height }</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PokemonPopup;