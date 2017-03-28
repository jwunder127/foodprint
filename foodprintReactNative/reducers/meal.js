import axios from 'axios';
import { nutritionixConfig, nutritionixURL} from '../secrets';
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
/* -----------------    ACTIONS     ------------------ */

const SET_MEAL = 'SET_MEAL';
const SET_MEALS = 'SET_MEALS'
const SET_ALL_MEALS = 'SET_ALL_MEALS';
const ADD_MEAL = 'ADD_MEAL'
const REMOVE_MEALS = 'REMOVE_MEAL';
const SET_DATES = 'SET_DATES';
const SET_SUMMARY = 'SET_SUMMARY'

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
    newMeal: meal,
    newDate: meal.created_at.slice(0,10)
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
      newState.allMeals.unshift(action.newMeal)
      if (!newState.datesArray.includes(action.newDate)) {
        newState.datesArray.push(action.newDate)
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

/* ------------       DISPATCHERS     ------------------ */

export const setMealsByDate = (date) => {

  return (dispatch, getState) => {

    let allMeals = getState().meal.allMeals;
    //Filter allMeals for just the ones created on a given date
    let selectedMeals = allMeals.filter( (meal) => {
      return meal.created_at.slice(0,10) === date
    })

    //Dispatch selected meals to the store
    dispatch(setMeals(selectedMeals))
  }

}

export const setMealsByTag = (tag) => {

  return (dispatch, getState) => {

    let allMeals = getState().meal.allMeals;
    //Filter allMeals for tags
    let selectedMeals = allMeals.filter( (meal) => {
      return meal.tags.includes(tag)
    })
    //Dispatch selected meals to the store
    dispatch(setMeals(selectedMeals))
  }

}

export const buildDatesArray = (meals) => {

  return (dispatch) => {
    let datesArray = [];
    console.log("meals", meals)
   // Filters the array for just those dates which contain an meal
    meals.forEach(meal => {
      let date = meal.created_at.slice(0, 10);
      if (!datesArray.includes(date)) datesArray.push(date)
    })
    console.log("dates Array", datesArray)


    dispatch(setDates(datesArray))

  }

}

export const summarizeMeals = (meals) => {

  return (dispatch) => {

    // Set up a nutrional table that will contain the combined nutritional values of all of the ingredients
        let nutritionalTable = {
          calories: 0.0,
          total_fat: 0.0,
          saturated_fat: 0.0,
          cholesterol: 0.0,
          sodium: 0.0,
          total_carbohydrate: 0.0,
          sugars: 0.0,
          protein: 0.0,
        };
        // This variable will contain just the string name of all ingredients
        let foodTagArray = [];
        //combine the nutrition value for all of the ingredients
        meals.forEach(meal => {
          foodTagArray = foodTagArray.concat(meal.tags)
          nutritionalTable.calories += meal.nutritionalTable.calories;
          nutritionalTable.total_fat += meal.nutritionalTable.total_fat;
          nutritionalTable.saturated_fat += meal.nutritionalTable.saturated_fat;
          nutritionalTable.cholesterol += meal.nutritionalTable.cholesterol;
          nutritionalTable.sodium += meal.nutritionalTable.sodium;
          nutritionalTable.total_carbohydrate += meal.nutritionalTable.total_carbohydrate;
          nutritionalTable.sugars += meal.nutritionalTable.sugars;
          nutritionalTable.protein += meal.nutritionalTable.protein;
        });


       // Create the summarized meal to dispatch
        let meal = {
          photoUrl: '',
          tags: _.uniq(foodTagArray), //remove any dupliate tags
          nutritionalTable: nutritionalTable
        }
    console.log("Summarized Meal", meal)
    dispatch(setSummary(meal))
  }
}

export const getAllMealsFromDB = () => {

  return (dispatch, getState) => {
// Retrieve all meals from user upon login, and keep them in the store
        let userId = getState().auth.id
        axios.get(`https://foodprintapp.herokuapp.com/api/meals/${userId}`)
        .then(response => {
           console.log("Loaded Meals from DB:", response.data)
           dispatch(setAllMeals(response.data))
           dispatch(buildDatesArray(response.data))
        })
        .catch(console.error)
    }
}

export const getNutrientsValue = (tags, photoUrl) => {

  return (dispatch, getState) => {
    let userId = getState().auth.id
    let ingredients = [];
    const data = {
      "query": tags.join(" ")
    };
    //Make call to Nutritionix API
    axios.post(nutritionixURL, data, nutritionixConfig)
      .then(response => {
        //Take each food result from the Nutritionx API and add it to an array of ingredients

        //console.log("Nutrition response", response.data.food)

        response.data.foods.forEach(eachFoodObject => {
          let foodObject = {
            food_name: eachFoodObject.food_name,
            serving_qty: eachFoodObject.serving_qty,
            serving_unit: eachFoodObject.serving_unit,
            serving_weight_grams: eachFoodObject.serving_weight_grams,
            calories: eachFoodObject.nf_calories,
            total_fat: eachFoodObject.nf_total_fat,
            saturated_fat: eachFoodObject.nf_saturated_fat,
            cholesterol: eachFoodObject.nf_cholesterol,
            sodium: eachFoodObject.nf_sodium,
            total_carbohydrate: eachFoodObject.nf_total_carbohydrate,
            dietary_fiber: eachFoodObject.nf_dietary_fiber,
            sugars: eachFoodObject.nf_sugars,
            protein: eachFoodObject.nf_protein,
            potassium: eachFoodObject.nf_potassium
          };
          ingredients.push(foodObject);
        });

        // Set up a nutrional table that will contain the combined nutritional values of all of the ingredients
        let nutritionalTable = {
          calories: 0.0,
          total_fat: 0.0,
          saturated_fat: 0.0,
          cholesterol: 0.0,
          sodium: 0.0,
          total_carbohydrate: 0.0,
          sugars: 0.0,
          protein: 0.0,
        };
        // This variable will contain just the string name of all ingredients
        let foodTagArray = [];
        //combine the nutrition value for all of the ingredients
        ingredients.forEach(nutrients => {
          foodTagArray.push(nutrients.food_name);
          nutritionalTable.calories += nutrients.calories;
          nutritionalTable.total_fat += nutrients.total_fat;
          nutritionalTable.saturated_fat += nutrients.saturated_fat;
          nutritionalTable.cholesterol += nutrients.cholesterol;
          nutritionalTable.sodium += nutrients.sodium;
          nutritionalTable.total_carbohydrate += nutrients.total_carbohydrate;
          nutritionalTable.sugars += nutrients.sugars;
          nutritionalTable.protein += nutrients.protein;
        });

       // Create the object to be saved in the Database
        let mealToSave = {
          photoUrl: photoUrl,
          tags: foodTagArray,
          nutritionalTable: nutritionalTable
        }

        //SAVE to database this current meal:
        //The DB will receive as a body: a Meal object and an Ingredients array
            //Meal contains: photoURL, FoodTags strings (received from nutrition API), and nutritionalTable
            //Ingredients contains: Array of food objects (received from nutrition API)

        axios.post(`https://foodprintapp.herokuapp.com/api/meals/${userId}`, {meal: mealToSave, ingredients: ingredients})
        .then(savedMeal => {
           console.log("Saved Meal in DB:", savedMeal.data[0])

           //Add meal to the all meals state saved in the store
           dispatch(addMeal(savedMeal.data[0]))


           // Add this meal to the store as the currently selected meal
           return dispatch(setMeal(savedMeal.data[0]))
        })
        .then(
            //Send the user to the Meal view displaying this uploaded meal
          () => Actions.meal()
        )
        .catch(console.error)
      }
    )
  .catch( (error) => {
    console.log(error, "Tag not found");
    Actions.camera({reset: true})
  }
  )
}
};

export default mealReducer
