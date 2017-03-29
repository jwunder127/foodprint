import axios from 'axios';
import { Actions } from 'react-native-router-flux'
import { removeAllMeals } from './mealThunks'

/* ------------------    ACTIONS    --------------------- */

const AUTHENTICATED = 'AUTHENTICATED';
const REMOVE = 'REMOVE_CURRENT_USER';


/* --------------    ACTION CREATORS    ----------------- */

export const authenticated = user => ({
  type: AUTHENTICATED, user
});

export const remove = () => ({
  type: REMOVE
});

/* ------------------    REDUCER    --------------------- */

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;

    case REMOVE:
      return null;

    default:
      return state
  }
};


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
      .then(() => Actions.splash())
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


export default reducer;

