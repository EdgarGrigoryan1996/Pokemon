import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import s from "./Pokemon.module.css"
import {useDispatch} from "react-redux";
import {
    changePokemonsLimit,
    deleteCurrentPokemons,
    deleteFilteredPokemons
} from "../../features/Pokemons/pokemonsSlice";
import FilterType from "./FilterType";

function PokemonLimit(props) {
    const dispatch = useDispatch()

    const options = [
        { value: "10", label: '10' },
        { value: "20", label: '20' },
        { value: "50", label: '50' }
    ]

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChangeLimit = (selectedOption) => {
        dispatch(deleteFilteredPokemons())
        setSelectedOption(selectedOption);

    };

    useEffect(() => {
        dispatch(changePokemonsLimit({
            limit:selectedOption?.value
        }))

        dispatch(deleteCurrentPokemons())

    },[selectedOption])

    return (
        <>
            <div className={s.filterBlock}>
                <div className={s.mySelect}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={handleChangeLimit}
                        options={options}
                    />
                </div>
                <FilterType />
            </div>

        </>

    );
}

export default PokemonLimit;