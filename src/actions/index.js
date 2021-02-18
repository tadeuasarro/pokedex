export const FETCH_POKEMON_PENDING = 'FETCH_BOOKS_PENDING';
export const FETCH_POKEMON_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_BOOKS_ERROR';

export const fetchPokemonPending = () => ({
  type: FETCH_POKEMON_PENDING,
});

export const fetchPokemonSuccess = pokemon => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemon,
});

export const fetchPokemonError = error => ({
  type: FETCH_POKEMON_ERROR,
  error,
});
