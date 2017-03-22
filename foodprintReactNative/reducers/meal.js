import axios from 'axios';
import { nutritionixConfig, nutritionixURL} from '../secrets';


/* -----------------    ACTIONS     ------------------ */

const CREATE_MEAL = 'CREATE_MEAL';

/* ------------   ACTION CREATORS     ------------------ */

export const loadCurrentMeal = (foodTagArray, finalNutritionObject) => {
  return {
    type: CREATE_MEAL,
    foodTags: foodTagArray,
    nutritionInfo: finalNutritionObject
  }
};

/* ------------       REDUCERS     ------------------ */
const initialMealState = {foodTags: [], nutritionInfo: {}};

const mealreducer = (state = initialMealState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case CREATE_MEAL:
      newState.foodTags = action.foodTags;
      newState.nutritionInfo = action.nutritionInfo;
      return newState;

    default:
      return newState;
  }
};

/* ------------       DISPATCHERS     ------------------ */

getNutrientsValue = () => {
  return (dispatch, getState) => {
    let allMeal = [];
    const data = {
      "query": getState().cameraTags.join(" ")
    };
    axios.post(nutritionixURL, data, nutritionixConfig)
      .then(response => {
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
          allMeal.push(foodObject);
        });
        let finalNutritionObject = {
          calories: 0.0,
          total_fat: 0.0,
          saturated_fat: 0.0,
          cholesterol: 0.0,
          sodium: 0.0,
          total_carbohydrate: 0.0,
          sugars: 0.0,
          protein: 0.0,
        };
        let foodTagArray = [];

        allMeal.forEach(nutrients => {
          foodTagArray.push(nutrients.food_name);
          finalNutritionObject.calories += nutrients.calories;
          finalNutritionObject.total_fat += nutrients.total_fat;
          finalNutritionObject.saturated_fat += nutrients.saturated_fat;
          finalNutritionObject.cholesterol += nutrients.cholesterol;
          finalNutritionObject.sodium += nutrients.sodium;
          finalNutritionObject.total_carbohydrate += nutrients.total_carbohydrate;
          finalNutritionObject.sugars += nutrients.sugars;
          finalNutritionObject.protein += nutrients.protein;
        });
        dispatch(loadCurrentMeal(foodTagArray, finalNutritionObject))
  }
  )
.
catch(console.error)
}
};

export default mealreducer
