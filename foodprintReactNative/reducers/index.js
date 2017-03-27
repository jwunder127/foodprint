import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  welcome: require('./default').default,
  meal: require('./meal').default,
  auth: require('./auth').default
});

export default rootReducer;
