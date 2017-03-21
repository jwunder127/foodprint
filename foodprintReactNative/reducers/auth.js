import axios from 'axios';

const AUTHENTICATED = 'AUTHENTICATED';

const initialState = {
  user: undefined,
  errorMessage: undefined
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return Object.assign({}, state, {user: action.user})

    default:
      return state
  }
}

export const authenticated = user => ({
  type: AUTHENTICATED, user
});


export const whoami = () =>
  dispatch =>
    axios.get('http://192.168.5.50:1337/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(() => dispatch(authenticated(undefined)))

export const login = (username, password) =>
  dispatch =>
    axios.post('http://192.168.5.50:1337/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('http://192.168.5.50:1337/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export default reducer;
