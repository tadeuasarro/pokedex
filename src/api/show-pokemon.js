import { fetchDetailPending, fetchDetailError, fetchDetailSuccess } from '../actions/index';

const url = 'https://pokeapi.co/api/v2/pokemon/9';
const config = {
  mode: 'cors',
  method: 'GET',
};

function showPokemon() {
  return dispatch => {
    dispatch(fetchDetailPending());
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        const {
          weight, height, name, sprites, types,
        } = res;
        dispatch(fetchDetailSuccess({
          weight, height, name, sprites, types,
        }));
        return {
          weight, height, name, sprites, types,
        };
      })
      .catch(error => {
        dispatch(fetchDetailError(error));
      });
  };
}

export default showPokemon;
