import Axios from "axios";

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

/**
 * A esto se le llama una funcion currificada
 * Es una funcion que devuelve otra funcion...
 * Esto es gracias a la libreria thunk
 */
const fetchPokemon = (valor) => {
    return (dispatch) => {  //Gracia a eso podemos hacer uso del dispatch de redux
        dispatch(fetchPokemonRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(reponse => {
            dispatch(fetchPokemonSuccess([reponse.data]));
        })
        .catch(error => {
            dispatch(fetchPokemonFailure('No se encontro el pokemon'))
        });
    }
}

export default fetchPokemon;