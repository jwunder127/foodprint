import axios from 'axios';
import { nutritionixConfig, nutritionixURL} from '../secrets';
import { Actions } from 'react-native-router-flux'
/* -----------------    ACTIONS     ------------------ */

const SELECT_MEAL = 'SELECT_MEAL';

/* ------------   ACTION CREATORS     ------------------ */

export const loadSelectedMeal = (foodTagArray, nutritionalTable, url) => {
  return {
    type: SELECT_MEAL,
    foodTags: foodTagArray,
    nutritionInfo: nutritionalTable,
    url: url
  }
};

/* ------------       REDUCERS     ------------------ */
const initialState = {
  selectedMeal: {
    foodTags: [],
    nutritionInfo: {},
    url: ""
  }
};

const camera = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SELECT_MEAL:
      newState.selectedMeal.foodTags = action.foodTags
      newState.selectedMeal.nutritionInfo = action.nutritionInfo
      newState.selectedMeal.url = action.url
      return newState

    default:
      return newState
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getNutrientsValue = (tags, url) => {

  return (dispatch) => {

    let ingredients = [];
    const data = {
      "query": tags.join(" ")
    };
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
        // This variable will contain just the name of all ingredients
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

        console.log("INGREDIENTS", ingredients)

        let mealToSave = {
          photoUrl: url,
          tags: foodTagArray,
          nutritionalTable: nutritionalTable
        }
        //SAVE TO DATABASE THIS MEAL:
        //IT WILL RECEIEVE as body - Meal and Ingredients
        //Meal contains: PHOTOURL, FOODTAGARRAY, nutritionalTable
        //Ingredients contains: Array of food objects

        axios.post('http://192.168.4.165:1337/api/meals/2', {meal: mealToSave, ingredients: ingredients})
        .then(response => {
           //const user = response.data
           console.log("Saved Data:", response.data)
        })
        .catch(console.error)


        return dispatch(loadSelectedMeal(foodTagArray, nutritionalTable, url))
        //Add to state of all meals
    }
  )
.then(() => Actions.meal())
.catch(console.error)
}
};

export default camera
