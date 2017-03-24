'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Ingredient = db.define('ingredients', {
  food_name: {
    type: Sequelize.STRING,
    allowNull: false},
  serving_qty: Sequelize.FLOAT,
  serving_unit: Sequelize.FLOAT,
  serving_weight_grams: Sequelize.FLOAT,
  calories: Sequelize.FLOAT,
  total_fat: Sequelize.FLOAT,
  saturated_fat: Sequelize.FLOAT,
  cholesterol: Sequelize.FLOAT,
  sodium: Sequelize.FLOAT,
  total_carbohydrate: Sequelize.FLOAT,
  dietary_fiber: Sequelize.FLOAT,
  sugars: Sequelize.FLOAT,
  protein: Sequelize.FLOAT,
  potassium: Sequelize.FLOAT
  }
)

module.exports = Ingredient
