import { FETCH_TOKEN_LIST } from '../constants';

const initialState = {
  list: []
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
