import { combineReducers } from "redux";
import game_shopt from './gameShopReducer';
import buscador from "./buscadorReducer";

const rootReducers = combineReducers({
    game_shopt,
    buscador
})

export default rootReducers