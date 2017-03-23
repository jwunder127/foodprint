import axios from 'axios';
import { nutritionixConfig, nutritionixURL} from '../secrets';
import { Actions } from 'react-native-router-flux'
/* -----------------    ACTIONS     ------------------ */

const SET_MEAL = 'SET_MEAL';
const SET_MEALS = 'SET_MEALS'
const SET_ALL_MEALS = 'SET_ALL_MEALS';

/* ------------   ACTION CREATORS     ------------------ */

export const setAllMeals = (allMeals ) => {
  return {
    type: SET_ALL_MEALS,
    allMeals: allMeals
  }
};

/* ------------       REDUCERS     ------------------ */
const initialState = {
  allMeals: []
};

const mealReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_ALL_MEALS:
      newState.allMeals = action.allMeals
      return newState

    default:
      return newState
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getAllMealsFromDB = () => {

  return (dispatch, getState) => {

        axios.get('http://192.168.4.165:1337/api/meals/2')
        .then(response => {
           console.log("Saved Data:", response.data)
           dispatch(setAllMeals(response.data))
        })
        .catch(console.error)

        //Sets this uploaded meal as the Selected Meal

    }
}


export default mealReducer
