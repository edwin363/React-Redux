export const BUY_POKEMON = 'BUY_POKEMON';
export const RETURN_POKEMON = 'RETURN_POKEMOM';

export const buy_pokemon_action = (cant) => {
    return{
        type: BUY_POKEMON,
        payload: cant
    }
}

export const return_pokemon_action = (cant) => {
    return{
        type: RETURN_POKEMON,
        payload: cant
    }
}