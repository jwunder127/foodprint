// import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SEND_NUTRITION_TAGS = 'SEND_NUTRITION_TAGS';
const ADD_MEAL_URL = 'ADD_MEAL_URL';

/* ------------   ACTION CREATORS     ------------------ */

const sendToNutrition = (foodTags) => ({type: SEND_NUTRITION_TAGS, foodTags: foodTags});

const addMealImageUrl = (mealImageUrl) => ({type: ADD_MEAL_URL, mealImageUrl: mealImageUrl})

/* ------------       REDUCERS     ------------------ */
const initialState = {};

const camera = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case SEND_NUTRITION_TAGS:
      newState.foodTags = action.foodTags
      return newState

    case ADD_MEAL_URL:
      newState.mealImageUrl = action.mealImageUrl

    default:
      return newState
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getNutrition = (tags) => (dispatch) => {
  dispatch(sendToNutrition(tags))
}

export const mealImageUrlAdd = (mealImageUrl) => (dispatch) => {
  dispatch(addMealImageUrl(mealImageUrl))
}

export default camera
