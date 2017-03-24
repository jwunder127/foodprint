'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Meal = require('./meal')
const Ingredient = require('./ingredient')
const {expect} = require('chai')

describe('Meal', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('instance creation and validation', () => {

    it('creates an instance if it receives the rigth params', () =>
       Meal.create({photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg', tags: ['meat', 'pickles', 'cheese', 'bread']})
       .then(meal => expect(meal.id).to.equal(1)))

    it('rejects the creation of an instance without photoUrl', () =>
       Meal.create({tags: ['meat', 'pickles', 'cheese', 'bread']})
       .catch(err => expect(err.message).to.equal('notNull Violation: photoUrl cannot be null')))

  })

  describe('meal-ingredient-association', () => {

    let myMeal

    it('adds a row in the mealIngridient association table', () =>
        Meal.create({photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg', tags: ['meat', 'pickles', 'cheese', 'bread']})
        .then(meal => {
            myMeal = meal
            return Ingredient.create({food_name: 'meat', serving_qty: 1.2, serving_unit: 1.0, serving_weight_grams: 2, calories: 2.8, total_fat: 1, saturated_fat: 1.00, cholesterol: 1.00, sodium: 1.00, total_carbohydrate: 1.00, dietary_fiber: 1.00, sugars: 1.00, protein: 1.00, potassium: 1.00})
        })
        .then(ingredient => {
            return myMeal.addIngredient(ingredient)
        })
        .then(confirmation => expect(confirmation).to.be.an('array')))

  })

})

