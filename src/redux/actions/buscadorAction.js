export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

//Actions
export const fetchPokemonRequest = () => {
    return{
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon) => {
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (valor) => {

}

export default fetchPokemon;