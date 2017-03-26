import axios from 'axios';

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
    axios.get('http://192.168.1.9:1337/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
        return user;
      })
      .catch(() => {
        dispatch(authenticated(null))
      })

export const login = (username, password) =>
  dispatch =>
    axios.post('http://192.168.1.9:1337/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch => {
    dispatch(remove());
    axios.post('http://192.168.1.9:1337/api/auth/logout')
      .catch(err => console.error('logout unsuccessful', err))};

export const signup = (credentials) => {
  return dispatch => {
    axios.post('http://192.168.1.9:1337/api/auth/signup/local', credentials)
      .then(res => res.data)
      .then(user => dispatch(authenticated(user)))
      .catch(() => dispatch(whoami()))
  }
};

export default reducer;

