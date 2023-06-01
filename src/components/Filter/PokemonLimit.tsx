import React, {FC, useState} from 'react';
import Select from 'react-select'
import s from "./Pokemon.module.css"
import {useDispatch} from "react-redux";
import {changePokemonsLimit} from "../../features/Pokemons/pokemonsSlice";
import FilterType from "./FilterType";
import {SelectTypes} from "../../types/pokemon";

const options: SelectTypes[] = [
    {value: "10", label: '10'},
    {value: "20", label: '20'},
    {value: "50", label: '50'},
    {value: "75", label: '75'},
    {value: "100", label: '100'}
]

const PokemonLimit: FC = () => {
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChangeLimit = (selectedOption: SelectTypes | null) => {
        if (!selectedOption) {
            return
        }
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