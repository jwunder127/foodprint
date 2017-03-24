
'use strict'; // eslint-disable-line semi

const request = require('supertest')
const {expect, assert} = require('chai')
const db = require('APP/db')
const app = require('./start')
const User = require('../db/models/user')
const Meal = require('../db/models/meal')
const Ingredient = require('../db/models/ingredient')


const meal = {photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg', tags: ['meat', 'pickles', 'cheese', 'bread'], user_id: undefined, id: undefined}

const ingredient = {food_name: 'meat', serving_qty: 1.2, serving_unit: 1.0, serving_weight_grams: 2, calories: 2.8, total_fat: 1, saturated_fat: 1.00, cholesterol: 1.00, sodium: 1.00, total_carbohydrate: 1.00, dietary_fiber: 1.00, sugars: 1.00, protein: 1.00, potassium: 1.00}

const user = {email: 'beth@secrets.org', password: '12345', id: undefined}

describe('/api/meals', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /:user_id', () => {

    it('looks for the meals of an user with no meals', () => {
      return User.create(user)
      .then(theUser => {
        return request(app)
          .get(`/api/meals/${theUser.id}`)
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            expect(res.body.length).to.equal(0)
          })
      })
    })

    it('looks for the meals of an user with 1 existing meal', () => {
      return User.create(user)
      .then(theUser => {
        user.id = theUser.id
        meal.user_id = theUser.id
        return Meal.create(meal)
        .then(theMeal => {
          return request(app)
            .get(`/api/meals/${user.id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
              expect(res.body[0].tags).to.include('pickles')
            })
        })
      })
    })

  })

  describe('POST /:user_id', () => {

    it('persists a meal for an user', () => {
      return User.create(user)
      .then(theUser => {
        user.id = theUser.id
        meal.user_id = theUser.id
        return request(app)
          .post(`/api/meals/${user.id}`)
          .send({
            meal: meal,
            ingredients: [ingredient]
          })
          .expect(200)
          .then(res => {
            expect(res.body.length).to.equal(2)
            expect(res.body[0].photoUrl).to.equal('https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg')
          })
      })
    })

  })

})
