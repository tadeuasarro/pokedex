import { fetchPokemonPending, fetchPokemonError, fetchPokemonSuccess } from '../actions/index';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const config = {
  mode: 'cors',
  method: 'GET',
};

function indexPokemon() {
  return dispatch => {
    dispatch(fetchPokemonPending());
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchPokemonSuccess(res.books));
        return res.books;
      })
      .catch(error => {
        dispatch(fetchPokemonError(error));
      });
  };
}

export default indexPokemon;
