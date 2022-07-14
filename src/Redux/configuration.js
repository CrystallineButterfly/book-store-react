import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './Books/books';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
