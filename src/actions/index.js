export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

export const fetchPokemonPending = () => ({
  type: FETCH_POKEMON_PENDING,
});

export const fetchPokemonSuccess = results => ({
  type: FETCH_POKEMON_SUCCESS,
  results,
});

export const fetchPokemonError = error => ({
  type: FETCH_POKEMON_ERROR,
  error,
});
