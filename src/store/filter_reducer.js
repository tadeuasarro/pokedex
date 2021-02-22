import { FETCH_TYPES_ERROR, FETCH_TYPES_PENDING, FETCH_TYPES_SUCCESS } from '../actions/index';

const detailInitial = {
  pending: false,
  results: false,
  error: null,
};

export const filterReducer = (state = detailInitial, action) => {
  switch (action.type) {
    case FETCH_TYPES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TYPES_SUCCESS:
      return {
        ...state,
        pending: false,
        results: action.types,
      };
    case FETCH_TYPES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getTypes = state => state.types;
export const getTypesPending = state => state.pending;
export const getTypesError = state => state.error;
