import { combineReducers } from 'redux'

import pokedexReducer from './pokedex/reducer'

const rootReducer = combineReducers({
    pokemon: pokedexReducer
})

export default rootReducer;
