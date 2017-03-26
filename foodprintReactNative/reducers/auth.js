import axios from 'axios';

const AUTHENTICATED = 'AUTHENTICATED';


const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user

    default:
      return state
  }
}

export const authenticated = user => ({
  type: AUTHENTICATED, user
});


export const whoami = () =>
  dispatch =>
    axios.get('http://192.168.5.51:1337/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(() => {
        dispatch(authenticated(null))
      })

export const login = (username, password) =>
  dispatch =>
    axios.post('http://192.168.5.51:1337/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('http://192.168.5.51:1337/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const signup = (credentials) => {
  return dispatch => {
    axios.post('http://192.168.5.51:1337/api/auth/signup/local', credentials)
      .then(res => res.data)
      .then(() => {
        const username = credentials.email;
        const password = credentials.password;
        console.log('username password',username, password)
        dispatch(login({username, password}))
      })
      .catch(() => dispatch(whoami()))
  }
};
export default reducer;
