import { combineReducers } from 'redux';
import { drizzleReducers } from 'drizzle';
import { tokenReducer } from './tokenReducer';

export default combineReducers({
  ...drizzleReducers,
  token: tokenReducer
});
