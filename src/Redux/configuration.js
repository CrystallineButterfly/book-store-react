import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './Books/books';
import categoriesReducer from './Categories/Categories';

const configureStore = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(configureStore, applyMiddleware(thunk));

export default store;
