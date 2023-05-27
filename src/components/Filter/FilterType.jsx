import React, {useEffect} from 'react';
import s from "./Pokemon.module.css";
import Select from "react-select";
import {useState} from "react";
import {filterPokemons} from "../../features/Pokemons/pokemonsSlice";
import {useDispatch} from "react-redux";

function FilterType(props) {
    const dispatch = useDispatch()

    const types = [
        { value: "All", label: 'All' },
        { value: "grass", label: 'grass' },
        { value: "poison", label: 'poison' },
        { value: "fire", label: 'fire' },
        { value: "water", label: "water"}
    ]

    const [selectedType, setSelectedType] = useState(types[0]);

    const handleChangeType = (selectedOption) => {
        setSelectedType(selectedOption);
    };

    useEffect(() => {
        dispatch(filterPokemons({
            type:selectedType?.value
        }))
    },[selectedType])

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