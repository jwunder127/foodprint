'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Meals = db.model('meals')

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

//stores a meal into the db and adds related ingredients
router.post('/:user_id', (req, res, next) => {
  const meal = req.body.meal
  const ingredients = req.body.ingredients
  let createdMeal

  Meals.create({
    user_id: req.params.user_id,
    photoUrl: meal.photoUrl,
    tags: meal.tags,
    nutritionalTable: meal.nutritionalTable
  })
  .then((meal) => {
    //PENDING OF ADDING INGREDIENTS!!!
    createdMeal = meal
    res.json(createdMeal)
  })
  .catch(next)
})
