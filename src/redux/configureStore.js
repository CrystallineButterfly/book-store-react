/* eslint-disable max-len */
import { applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import DisplayBooks from '../components/DisplayBooks';
import AddBooks from '../components/AddBooks';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware); // apply logger to redux

const reducer = combineReducers({
  books: DisplayBooks, AddBooks,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
