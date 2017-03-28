
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

export default reducer;

