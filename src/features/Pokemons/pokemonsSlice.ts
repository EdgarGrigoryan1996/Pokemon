import {createSlice} from '@reduxjs/toolkit';
import {getPokemonsWithType} from "../../utils/helpFunctions/getPokemonsWithType";
import {Abilitiy, Pokemon} from "../../types/pokemon";
import {AppDispatch} from "../../app/store";

export interface State {
    error: boolean
    pokemons: Abilitiy[]
    currentPokemonInfo: Pokemon | null
    type: string
    limit: string
}

const initialState: State = {
    error: false,
    pokemons: [],
    currentPokemonInfo: null,
    type: "All",
    limit: "10",
};

export const pokemonsSlice = createSlice({
    name: 'Pokemons',
    initialState,

    reducers: {
        fetchPokemonsSuccess: (state, action) => {

            if (action.payload.pokemons) {
                state.pokemons = [...state.pokemons, ...action.payload.pokemons];
            } else if (action.payload.pokemonsWithType) {
                state.pokemons = [...action.payload.pokemonsWithType];
            } else {
                state.pokemons = state.pokemons.slice(0, action.payload.limit)
            }

        },
        fetchPokemonsFailed: (state, action) => {
            state.error = action.payload.error;

        },
        setCurrentPokemonInfo: (state, action) => {
            state.currentPokemonInfo = action.payload.currentPokemon
        },
        deleteCurrentPokemonInfo: (state) => {
            state.currentPokemonInfo = null
        },
        changePokemonsLimit: (state, action) => {
            state.limit = action.payload.limit;
        },
        changePokemonsType: (state, action) => {
            state.type = action.payload.type
        }
    },
});

export const {
    fetchPokemonsSuccess,
    fetchPokemonsFailed,
    setCurrentPokemonInfo,
    deleteCurrentPokemonInfo,
    changePokemonsLimit,
    changePokemonsType,
} = pokemonsSlice.actions;

export const fetchPokemonsThunk = (limit: string) => {
    return async (dispatch: AppDispatch, getState: any) => {
        const state = getState().pokemons
        if (state.pokemons.length > limit) {
            dispatch(fetchPokemonsSuccess({
                limit
            }))
        } else {

            if (state.type === "All") {
                const currentRequestLimit = +limit - state.pokemons.length
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${currentRequestLimit}&offset=${state.pokemons.length}`);
                    const pokemons = await response.json();
                    dispatch(fetchPokemonsSuccess({
                        pokemons: pokemons.results
                    }))
                } catch (error: any) {
                    dispatch(fetchPokemonsFailed(error.message));
                }

            } else {
                const currentRequestLimit = +limit - state.pokemons.length
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/type/${state.type}?limit=${currentRequestLimit}&offset=${state.pokemons.length}`);
                    const pokemons = await response.json();
                    dispatch(fetchPokemonsSuccess({
                        pokemonsWithType: getPokemonsWithType(pokemons.pokemon, +limit)
                    }))
                } catch (error: any) {
                    dispatch(fetchPokemonsFailed(error.message));
                }
            }
        }

    }
}

export const showCurrentPokemonInfo = (pokemon: Abilitiy) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(pokemon.url);
            const currentPokemon = await response.json()
            dispatch(setCurrentPokemonInfo({
                currentPokemon
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export default pokemonsSlice.reducer;
