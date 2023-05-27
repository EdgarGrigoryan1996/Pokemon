import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from "../features/Pokemons/pokemonsSlice";

export const store = configureStore({
  reducer: {
    pokemons:pokemonsSlice,
  },
});
