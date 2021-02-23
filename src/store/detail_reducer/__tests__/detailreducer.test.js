import {
  FETCH_DETAIL_ERROR, FETCH_DETAIL_PENDING, FETCH_DETAIL_SUCCESS, RESET_DETAIL,
} from '../../../actions/index';
import { detailReducer } from '../detail_reducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: null };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, results: false });
  });

  it('resets the state to default', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: RESET_DETAIL };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, results: false });
  });

  it('sets the state as pending true', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: FETCH_DETAIL_PENDING };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: true, results: false });
  });

  it('sets the state as an error has been returned', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = { type: FETCH_DETAIL_ERROR, error: 'This is not working' };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: 'This is not working',
      pending: false,
      results: false,
    });
  });

  it('sets the state as a pokemon is being detailed', () => {
    const mockState = { error: null, pending: false, results: false };
    const mockAction = {
      type: FETCH_DETAIL_SUCCESS,
      detail: {
        name: 'string',
        url: 'https://string.com',
      },
    };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: null,
      pending: false,
      results: {
        name: 'string',
        url: 'https://string.com',
      },
    });
  });
});
