import { FETCH_DETAIL_ERROR, FETCH_DETAIL_PENDING, FETCH_DETAIL_SUCCESS } from '../actions/index';

const detailInitial = {
  pending: false,
  results: false,
  error: null,
};

export const detailReducer = (state = detailInitial, action) => {
  switch (action.type) {
    case FETCH_DETAIL_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        results: action.detail,
      };
    case FETCH_DETAIL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getDetail = state => state.detail;
export const getDetailPending = state => state.pending;
export const getDetailError = state => state.error;
