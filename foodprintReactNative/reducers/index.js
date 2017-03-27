import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  meal: require('./meal').default,
  auth: require('./auth').default
});

export default rootReducer;
