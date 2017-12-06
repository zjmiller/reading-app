import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import fetchState from '../api/fetchState';
import saveState from '../api/saveState';
import items from '../content/items';
import rootReducer from '../reducers/rootReducer';

const savedState = fetchState();

const modifiedState = {
	chests: savedState.chests,
	engagements: savedState.engagements,
	items,
	letters: savedState.letters,
	rewardCards: savedState.rewardCards,
	session: savedState.session,
}

console.log(modifiedState);

const store = createStore(rootReducer, modifiedState, applyMiddleware(thunk, createLogger({ collapsed: true })));

console.log(store.getState());

store.subscribe(() => saveState(store.getState()));

export default store;