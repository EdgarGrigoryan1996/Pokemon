import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    pokemons: [],
    filteredPokemons:[],
    limit:"10"
};

export const pokemonsSlice = createSlice({
    name: 'Pokemons',
    initialState,

    reducers: {

        pushOnePokemon:(state,action) => {
                state.pokemons.push(action.payload.pokemon)

        },
        changePokemonsLimit: (state, action) => {
            state.limit = action.payload.limit
        },
        deleteCurrentPokemons:(state,action) => {
          state.pokemons = []
        },
        filterPokemons:(state, action) => {
                  state.filteredPokemons = state.pokemons.filter((pokemon) => {
                      return pokemon.types[0]?.type.name === action.payload.type || pokemon.types[1]?.type.name === action.payload.type
                  })
        },
        deleteFilteredPokemons:(state,action) => {
            state.filteredPokemons = []
        }

    },

});

export const {addPokemons,pushOnePokemon,changePokemonsLimit,deleteCurrentPokemons,filterPokemons,deleteFilteredPokemons} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
