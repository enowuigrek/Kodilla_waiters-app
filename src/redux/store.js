import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import initialState from './initialState';
import statusesReducer from './statusRedux';
import tablesReducer from './tablesRedux'

const subreducers = { tables: tablesReducer, statuses: statusesReducer };

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;