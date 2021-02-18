import { combineReducers, createStore } from 'redux';
import pokemonReducer from './pokemon_reducer';

const store = createStore(
  combineReducers({
    pokemon: pokemonReducer,
  }),
);

export default store;
