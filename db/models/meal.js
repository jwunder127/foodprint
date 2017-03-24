'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Meal = db.define('meals', {
  photoUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: Sequelize.ARRAY(Sequelize.STRING),
  nutritionalTable: Sequelize.JSON
  }
)

module.exports = Meal


