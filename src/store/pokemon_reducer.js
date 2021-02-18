const pokemonInitial = {
  results: [],
};

const pokemonReducer = (state = pokemonInitial, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pokemonReducer;

export const getPokemon = state => state.products;
export const getPokemonPending = state => state.pending;
export const getPokemonError = state => state.error;
