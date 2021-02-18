import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { pokemonReducer } from './pokemon_reducer';

const store = createStore(
  combineReducers({
    pokemon: pokemonReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
