import {
  FETCH_POKEMON_ERROR, FETCH_POKEMON_PENDING, FETCH_POKEMON_SUCCESS,
} from '../../../actions/index';
import { pokemonReducer } from '../pokemon_reducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: null };
    const state = pokemonReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, results: false });
  });

  it('resets the state to pending true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: FETCH_POKEMON_PENDING };
    const state = pokemonReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: true, results: false });
  });

  it('resets the state to error true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: FETCH_POKEMON_ERROR, error: "There's something wrong" };
    const state = pokemonReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: "There's something wrong", pending: false, results: false });
  });

  it('resets the state to error true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = {
      type: FETCH_POKEMON_SUCCESS,
      results: [{
        name: 'string',
        url: 'https://string.com',
      }],
    };
    const state = pokemonReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: null,
      pending: false,
      results: [{
        name: 'string',
        url: 'https://string.com',
      }],
    });
  });
});
