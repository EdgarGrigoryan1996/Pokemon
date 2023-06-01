import {configureStore} from '@reduxjs/toolkit';
import pokemonsSlice from "../features/Pokemons/pokemonsSlice";
import thunkMiddleware from "redux-thunk"

export const store = configureStore({
    reducer: {
        pokemons: pokemonsSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunkMiddleware)
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
