import axios from 'axios';
import { nutritionixConfig, nutritionixURL} from '../secrets';
import { Actions } from 'react-native-router-flux'
/* -----------------    ACTIONS     ------------------ */

const SET_MEAL = 'SET_MEAL';
const SET_MEALS = 'SET_MEALS'
const SET_ALL_MEALS = 'SET_ALL_MEALS';

/* ------------   ACTION CREATORS     ------------------ */

// export const setMeal = (foodTagArray, nutritionalTable, photoUrl) => {
//   return {
//     type: SET_MEAL,
//     foodTags: foodTagArray,
//     nutritionInfo: nutritionalTable,
//     photoUrl: photoUrl
//   }
// };

export const setMeal = (meal) => {
  return {
    type: SET_MEAL,
    selectedMeal: meal
  }
}


export const setAllMeals = (allMeals) => {
  return {
    type: SET_ALL_MEALS,
    allMeals: allMeals
  }
};

/* ------------       REDUCERS     ------------------ */
const initialState = {
  selectedMeal: {
   // foodTags: [],
   // nutritionInfo: {},
   // photoUrl: ""
  },
  allMeals: []
};

const mealReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_MEAL:
      newState.selectedMeal = action.selectedMeal
      return newState

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
           console.log("Loaded Meals:", response.data)
           dispatch(setAllMeals(response.data))
        })
        .catch(console.error)

        //Sets this uploaded meal as the Selected Meal

    }
}

export const getNutrientsValue = (tags, photoUrl) => {

  return (dispatch) => {

    let ingredients = [];
    const data = {
      "query": tags.join(" ")
    };
    //Make call to Nutritionix API
    axios.post(nutritionixURL, data, nutritionixConfig)
      .then(response => {
        //Take each food result from the Nutritionx API and add it to an array of ingredients
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
        axios.post('http://192.168.4.165:1337/api/meals/2', {meal: mealToSave, ingredients: ingredients})
        .then(savedMeal => {
           console.log("Saved Meal:", savedMeal.data[0])
           return dispatch(setMeal(savedMeal.data[0]))
        })
        .then(
            //Send the user to the Meal view displaying this uploaded meal
          () => Actions.meal()
        )
        .catch(console.error)

        //Sets this uploaded meal as the Selected Meal

        //add a section to append this to the end of the ALL meals state

        //dispatch(setMeal(foodTagArray, nutritionalTable, photoUrl))
    }
  )
.catch(console.error)
}
};

export default mealReducer
