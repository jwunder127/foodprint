'use strict'; // eslint-disable-line semi

const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('./start')

const meal = {photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg', tags: ['meat', 'pickles', 'cheese', 'bread']}

const ingredient = {food_name: 'meat', serving_qty: 1.2, serving_unit: 1.0, serving_weight_grams: 2, calories: 2.8, total_fat: 1, saturated_fat: 1.00, cholesterol: 1.00, sodium: 1.00, total_carbohydrate: 1.00, dietary_fiber: 1.00, sugars: 1.00, protein: 1.00, potassium: 1.00}

let userID = 0

describe('/api/meals', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /:user_id', () => {

      it('looks for the meals of an user', () =>
        request(app)
          .get(`/api/meals/1`)
          .expect(200)
      )

  })

  // describe('POST', () => {

  //     it('creates an user and adds a meal', () => {
  //         request(app)
  //         .post('/api/users')
  //         .send({
  //           email: 'beth@secrets.org',
  //           password: '12345'
  //         })
  //         .then(res => {
  //           userID = res.body.id
  //         })
  //         .then(() => {
  //           request(app)
  //           .post(`/api/meals/${userID}`)
  //           .send({meal: meal, ingredients: [ingredient]})
  //           .then(res => console.log(res.body))
  //         })
  //       }
  //     )
  // })


})
