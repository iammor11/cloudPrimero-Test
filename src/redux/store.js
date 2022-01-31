import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import error from './reducers/error';
import post from './reducers/post';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const reducer = combineReducers({
  post,
  error,
});

const store = createStore(reducer, applyMiddleware(...middlewares));
export default store;