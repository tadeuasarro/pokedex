// INDEX POKEMON ACTIONS AND ACTION CREATORS

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

// SHOW POKEMON DETAILS ACTIONS AND ACTIONS CREATORS

export const FETCH_DETAIL_PENDING = 'FETCH_DETAIL_PENDING';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_ERROR = 'FETCH_DETAIL_ERROR';

export const fetchDetailPending = () => ({
  type: FETCH_DETAIL_PENDING,
});

export const fetchDetailSuccess = detail => ({
  type: FETCH_DETAIL_SUCCESS,
  detail,
});

export const fetchDetailError = error => ({
  type: FETCH_DETAIL_ERROR,
  error,
});
