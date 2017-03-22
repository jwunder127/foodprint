// import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const WELCOME = 'WELCOME';

/* ------------   ACTION CREATORS     ------------------ */

const welcome = () => ({type: WELCOME});

/* ------------       REDUCERS     ------------------ */
const initialState = {greeting: 'welcome to foodprint'};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case WELCOME:
      return newState

    default:
      return newState
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const welcomeScreen = () => (dispatch) => {
  dispatch(welcome())
}

export default reducer
