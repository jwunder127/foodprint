
/* -----------------    ACTIONS     ------------------ */

const SET_MEAL = 'SET_MEAL';
const SET_MEALS = 'SET_MEALS'
const SET_ALL_MEALS = 'SET_ALL_MEALS';
const ADD_MEAL = 'ADD_MEAL'
const REMOVE_MEALS = 'REMOVE_MEAL';
const SET_DATES = 'SET_DATES';
const SET_SUMMARY = 'SET_SUMMARY';


/* ------------   ACTION CREATORS     ------------------ */

export const setSummary = (meal) => {
  return {
    type: SET_SUMMARY,
    summarizedMeal: meal
  }
}

export const setDates = (dates) => {
  return {
    type: SET_DATES,
    datesArray: dates
  }
}

export const setMeal = (meal) => {
  return {
    type: SET_MEAL,
    selectedMeal: meal
  }
}

export const setMeals = (meals) => {
  return {
    type: SET_MEALS,
    selectedMeals: meals
  }

}

export const addMeal = (meal) => {
  return {
    type: ADD_MEAL,
    newMeal: meal
  }
}

export const setAllMeals = (allMeals) => {
  return {
    type: SET_ALL_MEALS,
    allMeals: allMeals
  }
};

export const removeAllMeals = () => {
  return {
    type: REMOVE_MEALS
  }
}

/* ------------       REDUCERS     ------------------ */
const initialState = {
  selectedMeal: {},
  selectedMeals: [],
  allMeals: [],
  datesArray: [],
  summarizedMeal: {}
};


const mealReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_MEAL:
      newState.selectedMeal = action.selectedMeal
      return newState

    case SET_ALL_MEALS:
      newState.allMeals = action.allMeals.sort((a, b) => b.id - a.id)
      return newState

    case ADD_MEAL:
      newState.allMeals = [action.newMeal, ...state.allMeals]
      if (!newState.datesArray.includes(action.newDate)) {
        newState.datesArray = [...state.datesArray, action.newDate]
        }
      return newState

    case REMOVE_MEALS:
      return initialState;

    case SET_MEALS:
      newState.selectedMeals = action.selectedMeals
      return newState

    case SET_DATES:
      newState.datesArray = action.datesArray
      return newState;

    case SET_SUMMARY:
      newState.summarizedMeal = action.summarizedMeal
      return newState

    default:
      return newState
  }
}

export default mealReducer
