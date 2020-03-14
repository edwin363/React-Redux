import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopAction"

const default_game_shopt = {
    pokemon: 30
}

const game_shopt = (state = default_game_shopt, action) => {
    switch(action.type){

        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }

        case RETURN_POKEMON: {
            if(state.pokemon === 30){
                return{
                    ...state,
                    pokemon: state.pokemon,
                    message: 'Error ya esta completo'
                }
            }
            else{
                return{
                    ...state,
                    pokemon: state.pokemon + action.payload
                }
            }
            
        }
        
        default: return state
    }
}

export default game_shopt;