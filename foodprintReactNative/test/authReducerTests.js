import { expect } from 'chai';
import { authenticated, remove } from '../reducers/auth';
import store from '../store'

const dispatch = store.dispatch;
const getState = store.getState;
const someUsers = [
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
]


describe('Auth dispatches actions', () => {

  it('it should register an user', () => {
    dispatch(authenticated(someUsers[1]));
    expect(getState().auth.name).to.equal('Barack Obama');
  })

  it('it should remove a registered user', () => {
    dispatch(remove());
    expect(getState().auth).to.equal(null);
  })


});
