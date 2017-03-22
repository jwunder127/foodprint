'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Ingredient = db.define('ingredients', {
  name: Sequelize.STRING,
  nutritionJSON: Sequelize.JSON
  }
)

module.exports = Ingredient
