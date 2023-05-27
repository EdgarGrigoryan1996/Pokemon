import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {pushOnePokemon} from "./features/Pokemons/pokemonsSlice";
import Pokemons from "./components/Pokemons/Pokemons";
import PokemonLimit from "./components/Filter/PokemonLimit";

function App() {
    const dispatch = useDispatch()

    const pokemons = useSelector((state) => {
        return state.pokemons.pokemons
    })
    const filteredPokemons = useSelector((state) => {
        return state.pokemons.filteredPokemons
    })
    const limit = useSelector((state) => {
        return state.pokemons.limit
    })


    function getOnePokemon(pokemon){
        let url = pokemon.url
        fetch(url)
            .then(response => response.json())
            .then((pokeData) => {
                console.log(pokeData)
                dispatch(pushOnePokemon({
                    pokemon:pokeData
                }))
            })
    }

    function getPokemons(){
        console.log(limit)
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then((response) => {
                return response.json()
            })
            .then((allpokemon) => {
                allpokemon.results.forEach(function(pokemon){
                        getOnePokemon(pokemon);
                })
            })
    }

    useEffect(() => {
        if(pokemons.length === 0){
            getPokemons()
        }

    },[limit])
  return (
    <div className="App">
      <header className="App-header">
          <PokemonLimit />
        <Pokemons pokemons={filteredPokemons.length > 0 ? filteredPokemons : pokemons}/>
      </header>
    </div>
  );
}

export default App;
