const {expect} = require('chai');

const setMeal = require('../../reducers/meal');

describe('Meal actions', () => {
  describe('setMeal', () => {
    it('adds a selected from the meals array', () => {
      const meal =
        {
          photoUrl: randomphoto.com,
          tags: ['random', 'foodTag', 'Arrays'],
          nutritionalTable: {
            calories: 0.0,
            total_fat: 0.0,
            saturated_fat: 0.0,
            cholesterol: 0.0,
            sodium: 0.0,
            total_carbohydrate: 0.0,
            sugars: 0.0,
            protein: 0.0
          }};

      expect(setMeal(meal)).to.be.deep.equal({
        type: 'SET_MEAL',
        selectedMeal: meal
      });
    });
  });
})
