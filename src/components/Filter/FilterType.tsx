import React, {FC} from 'react';
import s from "./Pokemon.module.css";
import Select from "react-select";
import {useState} from "react";
import {changePokemonsType} from "../../features/Pokemons/pokemonsSlice";
import {useDispatch} from "react-redux";
import {SelectTypes} from "../../types/pokemon";

const types: SelectTypes[] = [
    {value: "All", label: 'All'},
    {value: "normal", label: 'Normal'},
    {value: "ice", label: 'Ice'},
    {value: "dragon", label: 'Dragon'},
    {value: "dark", label: 'Dark'},
    {value: "grass", label: 'Grass'},
    {value: "poison", label: 'Poison'},
    {value: "fire", label: 'Fire'},
    {value: "water", label: "Water"},
    {value: "bug", label: 'Bug'},
    {value: "ghost", label: 'Ghost'},
    {value: "fighting", label: 'Fighting'},
    {value: "electric", label: "Electric"},
    {value: "rock", label: "Rock"},
    {value: "ground", label: "Ground"}
]

const FilterType: FC = () => {
    const dispatch = useDispatch()
    const [selectedType, setSelectedType] = useState(types[0]);

    const handleChangeType = (selectedOption: SelectTypes | null): void => {
        if (!selectedOption) {
            return
        }
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