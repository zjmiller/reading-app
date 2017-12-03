import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';

export default createStore(rootReducer, applyMiddleware(thunk, createLogger({ collapsed: true })));