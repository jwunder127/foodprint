'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Ingridient = db.define('ingridients', {
  name: Sequelize.STRING,
  }
)

module.exports = Ingridient
