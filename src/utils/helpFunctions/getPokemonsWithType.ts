import {PokemonWithType} from "../../types/pokemon";

export const getPokemonsWithType = (pokemonsList: PokemonWithType[], limit: number) => {
    return pokemonsList.slice(0, limit).map((pokemon) => {
        return {
            ...pokemon.pokemon
        }
    })
}