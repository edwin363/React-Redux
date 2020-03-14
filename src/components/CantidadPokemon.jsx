import React, { Component } from 'react';
import { connect } from 'react-redux';

class CantidadPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                Unidades: {this.props.game_shopt.pokemon}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        game_shopt: state.game_shopt
    }
}

/** 
 * Esta funcion recibe dos parametros uno es para los estados
 * y el otro para los dispatch
*/

export default connect(mapStateToProps)(CantidadPokemon);