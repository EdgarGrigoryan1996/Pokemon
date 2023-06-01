import {configureStore} from '@reduxjs/toolkit';
import pokemonsSlice from "../features/Pokemons/pokemonsSlice.js";
import thunkMiddleware from "redux-thunk"

export const store = configureStore({
    reducer: {
        pokemons: pokemonsSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunkMiddleware)
    }
});
