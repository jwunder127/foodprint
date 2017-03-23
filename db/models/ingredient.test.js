'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Ingredient = require('./ingredient')
const {expect} = require('chai')

describe('Ingredient', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('instance creation and validation', () => {
    it('creates an instance if it receives the rigth params', () =>
       Ingredient.create({food_name: 'meat', serving_qty: 1.2, serving_unit: 1.0, serving_weight_grams: 2, calories: 2.8, total_fat: 1, saturated_fat: 1.00, cholesterol: 1.00, sodium: 1.00, total_carbohydrate: 1.00, dietary_fiber: 1.00, sugars: 1.00, protein: 1.00, potassium: 1.00})
       .then(ingredient => expect(ingredient.id).to.equal(1)))

    it('rejects the creation of an instance without food_name', () =>
       Ingredient.create({serving_qty: 1.2, serving_unit: 1.0, serving_weight_grams: 2, calories: 2.8, total_fat: 1, saturated_fat: 1.00, cholesterol: 1.00, sodium: 1.00, total_carbohydrate: 1.00, dietary_fiber: 1.00, sugars: 1.00, protein: 1.00, potassium: 1.00})
       .catch(err => expect(err.message).to.equal('notNull Violation: food_name cannot be null')))

  })
})
