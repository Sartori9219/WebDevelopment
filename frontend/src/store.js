import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './reducers/animalReducer';

const store = createStore(
  todosReducer,
  composeWithDevTools(  applyMiddleware(thunk))
);

export default store;
