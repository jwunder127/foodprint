'use strict'; // eslint-disable-line semi

const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedMeals = () => db.Promise.map([
  {photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg', tags: ['meat', 'pickles', 'cheese', 'bread'], user_id: 2},
  {photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-bc5b8cfa-4c22-446a-87c8-419d1ce31def.jpg', tags: ['cheese', 'tomato sauce', 'bread'], user_id: 2}
  ], meal => db.model('meals').create(meal))

const seedIngredients = () => db.Promise.map([
  {name: 'meat', nutritionJSON: nutriJSON},
  {name: 'pickles', nutritionJSON: nutriJSON},
  {name: 'cheese', nutritionJSON: nutriJSON},
  {name: 'tomato sauce', nutritionJSON: nutriJSON},
  {name: 'bread', nutritionJSON: nutriJSON},
  {name: 'salmon', nutritionJSON: nutriJSON},
], ingredient => db.model('ingredients').create(ingredient))

const seedMealIngredients = () => db.Promise.map([
  {meal_id: 1, ingredient_id: 1},
  {meal_id: 1, ingredient_id: 2},
  {meal_id: 1, ingredient_id: 3},
  {meal_id: 1, ingredient_id: 4},
  {meal_id: 2, ingredient_id: 3},
  {meal_id: 2, ingredient_id: 4},
  {meal_id: 2, ingredient_id: 5},
], mealIngredient => db.model('mealIngredient').create(mealIngredient))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedIngredients)
  .then(ingredients => console.log(`Seeded ${ingredients.length} ingredients OK`))
  .then(seedMeals)
  .then(meals => console.log(`Seeded ${meals.length} meals OK`))
  .then(seedMealIngredients)
  .then(mealIngredients => console.log(`Seeded ${mealIngredients.length} mealIngredients OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())

  const nutriJSON = {
            "food_name": "chicken",
            "brand_name": null,
            "serving_qty": 3,
            "serving_unit": "oz",
            "serving_weight_grams": 85,
            "nf_calories": 187,
            "nf_total_fat": 11.11,
            "nf_saturated_fat": 3.11,
            "nf_cholesterol": 79.9,
            "nf_sodium": 60.35,
            "nf_total_carbohydrate": 0.04,
            "nf_dietary_fiber": 0,
            "nf_sugars": null,
            "nf_protein": 20.37,
            "nf_potassium": 173.4,
            "nix_brand_name": null,
            "nix_brand_id": null,
            "nix_item_name": null,
            "nix_item_id": null,
            "upc": null,
            "consumed_at": "2017-03-22T18:20:14+00:00",
            "metadata": {},
            "source": 1,
            "ndb_no": 5110,
            "tags": {
                "item": "chicken",
                "measure": null,
                "quantity": "3.0",
                "tag_id": 9
            }
            }



