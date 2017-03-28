import { expect } from 'chai';
import { setMeal, setMeals, addMeal, setAllMeals, removeAllMeals } from '../reducers/meal';
import store from '../store'

const dispatch = store.dispatch;
const getState = store.getState;
const someMeals = [
  {photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-22f00451-a41a-4eef-9a6b-5e96fdf72352.jpg', tags: ['meat', 'pickles', 'cheese', 'bread'], user_id: 2},
  {photoUrl: 'https://s3.amazonaws.com/fullstackcapstone/image-bc5b8cfa-4c22-446a-87c8-419d1ce31def.jpg', tags: ['cheese', 'tomato sauce', 'bread'], user_id: 2}
  ];

describe('Meal dispatches actions', () => {

  it('it should set a Meal as selected Meal', () => {
    dispatch(setMeal(someMeals[0]));
    expect(getState().meal.selectedMeal.tags[0]).to.equal('meat');
  })

  it('it should set an array of meals as AllMeals', () => {
    dispatch(setAllMeals(someMeals));
    expect(getState().meal.allMeals.length).to.equal(2);
  })

  it('it should add a meal to AllMeals', () => {
    dispatch(addMeal(someMeals[0]));
    expect(getState().meal.allMeals.length).to.equal(3);
  })

  it('it should remove all Meals', () => {
    dispatch(removeAllMeals());
    expect(getState().meal.allMeals.length).to.equal(0);
  })

  it('it should set an array of meals as SelectedMeals', () => {
    dispatch(setMeals(someMeals));
    expect(getState().meal.selectedMeals[1].photoUrl).to.equal('https://s3.amazonaws.com/fullstackcapstone/image-bc5b8cfa-4c22-446a-87c8-419d1ce31def.jpg');
  })

});


