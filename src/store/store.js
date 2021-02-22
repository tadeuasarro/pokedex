import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { pokemonReducer } from './pokemon_reducer';
import { detailReducer } from './detail_reducer';
import { filterReducer } from './filter_reducer';

const store = createStore(
  combineReducers({
    pokemon: pokemonReducer,
    detail: detailReducer,
    filter: filterReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
