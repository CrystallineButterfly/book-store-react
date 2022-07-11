/* eslint-disable max-len */
import { applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import books from './books/books';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware); // apply logger to redux

const reducer = combineReducers({
  book: books,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
