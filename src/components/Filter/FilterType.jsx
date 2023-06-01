import React from 'react';
import s from "./Pokemon.module.css";
import Select from "react-select";
import {useState} from "react";
import {changePokemonsType} from "../../features/Pokemons/pokemonsSlice.js";
import {useDispatch} from "react-redux";

const types = [
    {value: "All", label: 'All'},
    {value: "grass", label: 'grass'},
    {value: "poison", label: 'poison'},
    {value: "fire", label: 'fire'},
    {value: "water", label: "water"}
]

function FilterType() {
    const dispatch = useDispatch()
    const [selectedType, setSelectedType] = useState(types[0]);

    const handleChangeType = (selectedOption) => {
        setSelectedType(selectedOption);
        dispatch(changePokemonsType({
            type: selectedOption.value
        }))
    };

    return (
        <div className={s.selectType}>
            <Select
                defaultValue={selectedType}
                onChange={handleChangeType}
                options={types}
            />
        </div>
    );

}

export default FilterType;