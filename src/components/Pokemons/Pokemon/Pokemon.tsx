import React, {FC} from 'react';
import s from "./Pokemon.module.css"
import {capitalizeFirstLetter} from "../../../utils/helpFunctions/capitalizeFirstLetter";

interface Props {
    name: string;
    onclick: () => void
}

const Pokemon: FC<Props> = (props) => {

    return (
        <div className={s.pokemonBlock} onClick={props.onclick}>
            <div className={s.pokemonName}>{capitalizeFirstLetter(props.name)}</div>
        </div>
    );

}

export default Pokemon;