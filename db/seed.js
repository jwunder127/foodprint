'use strict'; // eslint-disable-line semi

const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedMeals = () => db.Promise.map([
  {photoUrl: 'http://google.com', tags: ['some', 'another', 'and other one'], user_id: 2},
  {photoUrl: 'http://yahoo.com', tags: ['some other', 'another other', 'and other one other'], user_id: 2}
  ], meal => db.model('meals').create(meal))

const seedIngridients = () => db.Promise.map([
  {name: 'portobello', meal_id: 1},
  {name: 'onios', meal_id: 1},
  {name: 'cheese', meal_id: 1},
  {name: 'salmon', meal_id: 2},
  {name: 'lettuce', meal_id: 2},
  {name: 'tomato', meal_id: 2},
], ingridient => db.model('ingridients').create(ingridient))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedMeals)
  .then(meals => console.log(`Seeded ${meals.length} meals OK`))
  .then(seedIngridients)
  .then(ingridients => console.log(`Seeded ${ingridients.length} ingridients OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
