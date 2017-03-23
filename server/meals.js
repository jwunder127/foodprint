'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Meals = db.model('meals')
const Ingredients = db.model('ingredients')

const express = require('express')
const router = new express.Router()
module.exports = router

//gets all the meals for a user, with user_id as param
router.get('/:user_id', ( req, res, next) => {
  Meals.findAll({
    where: {
      user_id: req.params.user_id
    }
  })
  .then((meals) => {
    res.json(meals)
  })
  .catch(next)
})

//stores a meal into the db, adds related ingredients and relations between them
router.post('/:user_id', (req, res, next) => {
  const meal = req.body.meal
  const ingredients = req.body.ingredients
  let createdMeal
  const ingredientsPromises = []

  //creates the meal first
  Meals.create({
    user_id: req.params.user_id,
    photoUrl: meal.photoUrl,
    tags: meal.tags,
    nutritionalTable: meal.nutritionalTable
  })
  .then((meal) => {
    createdMeal = meal
    //transfers the array of ingredients to an array of promises of findOrCreate
    ingredients.forEach((ingredient) => {
        const aIngredientPromise = Ingredients.findOrCreate({
          where: {
            food_name: ingredient.food_name
          },
          defaults: {
            serving_qty: ingredient.serving_qty,
            serving_unit: ingredient.serving_unit,
            serving_weight_grams: ingredient.serving_weight_grams,
            calories: ingredient.calories,
            total_fat: ingredient.total_fat,
            saturated_fat: ingredient.saturated_fat,
            cholesterol: ingredient.cholesterol,
            sodium: ingredient.sodium,
            total_carbohydrate: ingredient.total_carbohydrate,
            dietary_fiber: ingredient.dietary_fiber,
            sugars: ingredient.sugars,
            protein: ingredient.protein,
            potassium: ingredient.potassium
          }
        })
        ingredientsPromises.push(aIngredientPromise)
      })
      //does Promise.all to the array of promises
      return Promise.all(ingredientsPromises)
  })
  .then((instancesInsideArrays) => {
    //receiving an array of arrays, each including one instance + other values
    //will take only the instances into another array
    const ingredientsInstances = instancesInsideArrays.map((oneInstanceInsideAnArray) => {
      return oneInstanceInsideAnArray[0]
    })
    //sets the relation between meal and its ingredients
    return createdMeal.setIngredients(ingredientsInstances)
  })
  .then((associationsConfirm) => {
    //return the created meal and an array containing another array with the associations instances
    res.json([createdMeal, associationsConfirm])
  })
  .catch(next)

})

