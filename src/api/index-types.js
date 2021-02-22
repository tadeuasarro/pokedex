import { fetchTypesPending, fetchTypesSuccess, fetchTypesError } from '../actions/index';

const url = 'https://pokeapi.co/api/v2/type/fire/';
const config = {
  mode: 'cors',
  method: 'GET',
};

function indexTypes() {
  return dispatch => {
    dispatch(fetchTypesPending());
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        const result = res.pokemon.filter(pokemon => (pokemon.pokemon.url.slice(34).replace('/', '') <= 151));
        console.log(result);
        dispatch(fetchTypesSuccess(result));
        return res;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchTypesError(error));
      });
  };
}

export default indexTypes;
