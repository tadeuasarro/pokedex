import {
  FETCH_TYPES_ERROR, FETCH_TYPES_PENDING, FETCH_TYPES_SUCCESS, RESET_TYPES,
} from '../../../actions/index';
import { filterReducer } from '../filter_reducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: null };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, results: false });
  });

  it('resets the state to default', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: RESET_TYPES };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, results: false });
  });

  it('resets the state to pending true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: FETCH_TYPES_PENDING };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: true, results: false });
  });

  it('resets the state to error true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: FETCH_TYPES_ERROR, error: "There's something wrong" };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: "There's something wrong", pending: false, results: false });
  });

  it('resets the state to error true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = {
      type: FETCH_TYPES_SUCCESS,
      types: [{
        name: 'string',
        url: 'https://string.com',
      }],
    };
    const state = filterReducer(mockState, mockAction);
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
