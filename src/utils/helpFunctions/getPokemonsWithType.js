export const getPokemonsWithType = (pokemonsList, limit) => {
    return pokemonsList.slice(0, limit).map((pokemon) => {
        return {
            ...pokemon.pokemon
        }
    })
}