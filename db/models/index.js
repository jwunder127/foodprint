'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Meal = require('./meal')
const Ingredient = require('./ingredient')

OAuth.belongsTo(User)
User.hasOne(OAuth)
User.hasMany(Meal)
Meal.hasMany(Ingredient)
module.exports = {User}
