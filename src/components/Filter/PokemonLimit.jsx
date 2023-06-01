import React, {useState} from 'react';
import Select from 'react-select'
import s from "./Pokemon.module.css"
import {useDispatch} from "react-redux";
import {changePokemonsLimit} from "../../features/Pokemons/pokemonsSlice.js";
import FilterType from "./FilterType";

const options = [
    {value: "10", label: '10'},
    {value: "20", label: '20'},
    {value: "50", label: '50'}
]

function PokemonLimit() {
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChangeLimit = (selectedOption) => {
        setSelectedOption(selectedOption);
        dispatch(changePokemonsLimit({
            limit: selectedOption?.value
        }))
    };

    return (
        <div className={s.filterBlock}>
            <div className={s.mySelect}>
                <Select
                    defaultValue={selectedOption}
                    onChange={handleChangeLimit}
                    options={options}
                />
            </div>
            <FilterType/>
        </div>
    );

}

export default PokemonLimit;