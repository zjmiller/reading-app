import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import fetchState from '../api/fetchState';
import saveState from '../api/saveState';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, fetchState(), applyMiddleware(thunk, createLogger({ collapsed: true })));

console.log(store.getState())

store.subscribe(() => saveState(store.getState()));

export default store;