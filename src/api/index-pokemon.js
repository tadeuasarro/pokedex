import { getPokemon, getPokemonPending, getPokemonError } from '../store/pokemon_reducer';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const config = {
  mode: 'cors',
  method: 'GET',
};

function indexPokemon() {
  return dispatch => {
    dispatch(getPokemonPending());
    fetch(url, config)
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(getPokemon(res.books));
      return res.books;
    })
    .catch(error => {
      dispatch(getPokemonError(error));
    })
  }
}

export default indexPokemon;
