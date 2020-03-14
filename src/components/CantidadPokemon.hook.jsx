import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook = () => {

    /**
     * React redux tiene dos funciones para trabajar con las funciones de hooks
     * las cuales son:
     * useSelector(); -> esta es para obtener estados
     * useDispatch(); -> esta es para enviar acciones
     */
    const game_shop = useSelector((state) => state.game_shopt);

    return(
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    )
}

export default CantidadPokemonHook