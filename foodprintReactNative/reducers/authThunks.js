import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import { removeAllMeals } from './mealThunks';
import { authenticated, remove } from './auth';

/* ------------       DISPATCHERS     ------------------ */

export const whoami = () =>
  dispatch =>
    axios.get('https://foodprintapp.herokuapp.com/api/auth/whoami')
      .then(res => res.data)
      .then(user => {
          dispatch(authenticated(user))
      })
      .catch(() => {
        dispatch(authenticated(null))
      });

export const login = (username, password) =>
  dispatch =>
    axios.post('https://foodprintapp.herokuapp.com/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch => {
    return axios.post('https://foodprintapp.herokuapp.com/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => Actions.login())
      .then(() => {
        dispatch(removeAllMeals());
        dispatch(remove());
      })
      .catch(err => console.error('logout unsuccessful', err))};

export const signup = (credentials) => {
  return dispatch => {
    return axios.post('https://foodprintapp.herokuapp.com/api/auth/signup/local', credentials)
      .then(res =>{console.log(res.data)})
      .then(() => {
        console.log('when are you getting here')
        const username = credentials.email;
        const password = credentials.password;
        dispatch(login(username, password))
      })
      .catch(dispatch(whoami()))
  }
};
