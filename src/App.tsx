import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonsThunk} from "./features/Pokemons/pokemonsSlice";
import Pokemons from "./components/Pokemons/Pokemons";
import PokemonLimit from "./components/Filter/PokemonLimit";
import pokemonHeaderImg from "./assets/img/pokemon.svg"
import {AppDispatch, RootState} from "./app/store";

function App() {
    const dispatch:AppDispatch = useDispatch()

    const pokemons = useSelector((state: RootState) => {
        return state.pokemons.pokemons
    })
    const limit = useSelector((state: RootState) => {
        return state.pokemons.limit
    })
    const currentType = useSelector((state: RootState) => {
        return state.pokemons.type
    })

    useEffect(() => {
        dispatch(fetchPokemonsThunk(limit))
    }, [dispatch, limit, currentType])

    return (
        <div className="App">
            <header>
                <img src={pokemonHeaderImg} alt=""/>
            </header>
            <main>
                <PokemonLimit/>
                <Pokemons pokemons={pokemons}/>
            </main>
        </div>
    );
}

export default App;
