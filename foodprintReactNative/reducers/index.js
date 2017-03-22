import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  welcome: require('./default').default,
  cameraResults: require('./camera').default,
  auth: require('./auth').default
});

export default rootReducer;
