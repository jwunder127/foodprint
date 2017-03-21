'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Meal = db.define('meals', {
  photoUrl: Sequelize.STRING,
  tags: Sequelize.ARRAY(Sequelize.STRING)
  }
)

module.exports = Meal


