/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './Books/Books';
import catergoriesReducer from './Catergories/Catergories';

const reducer = combineReducers({
  books: booksReducer,
  catergories: catergoriesReducer,
});

const store = configureStore({ reducer }, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
