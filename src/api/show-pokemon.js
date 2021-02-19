import { fetchDetailPending, fetchDetailError, fetchDetailSuccess } from '../actions/index';

const url = 'https://pokeapi.co/api/v2/pokemon/3';
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
          weight, height, name, types, id,
        } = res;
        const sprite = (res.sprites.front_default);
        dispatch(fetchDetailSuccess({
          weight, height, name, types, id, sprite,
        }));
        return {
          weight, height, name, types, id, sprite,
        };
      })
      .catch(error => {
        dispatch(fetchDetailError(error));
      });
  };
}

export default showPokemon;
