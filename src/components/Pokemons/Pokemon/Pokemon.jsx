import React from 'react';
import s from "./Pokemon.module.css"
import {capitalizeFirstLetter} from "../../../utils/helpFunctions/capitalizeFirstLetter";

function Pokemon(props) {

    return (
        <div className={s.pokemonBlock} onClick={props.onclick}>
            <div className={s.pokemonName}>{capitalizeFirstLetter(props.name)}</div>
        </div>
    );

}

export default Pokemon;