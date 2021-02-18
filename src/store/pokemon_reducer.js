import { FETCH_POKEMON_PENDING, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR } from '../actions/index';

const pokemonInitial = {
  pending: false,
  results: [],
  error: null,
};

export const pokemonReducer = (state = pokemonInitial, action) => {
  switch (action.type) {
    case FETCH_POKEMON_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.pokemon,
      };
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getPokemon = state => state.results;
export const getPokemonPending = state => state.pending;
export const getPokemonError = state => state.error;
