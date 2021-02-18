const pokemonInitial = {
  pokemon: [
    {
      id: 1,
      name: 'Bulbasaur',
      type: 'leaf',
    }
  ]
}

export const pokemonReducer = (state = pokemonInitial, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
