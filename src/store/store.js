import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import fetchState from '../api/fetchState';
import saveState from '../api/saveState';
import items from '../content/items';
import rootReducer from '../reducers/rootReducer';

if (localStorage.getItem('READING_APP_V') !== '2') {
	localStorage.removeItem('READING_APP_STATE');
	localStorage.setItem('READING_APP_V', '2');
}

let savedState = fetchState();

const modifiedState = {
	chests: savedState.chests,
	engagements: savedState.engagements,
	items,
	letters: savedState.letters,
	rewardCards: savedState.rewardCards,
	session: savedState.session,
}

const store = createStore(rootReducer, modifiedState, applyMiddleware(thunk, createLogger({ collapsed: true })));

if (store.getState().session.showingAnswerModal) {
	store.dispatch({
		type: 'HIDE_ANSWER_MODAL',
	});
}

if (!store.getState().session.items.find(item => item.itemId === 'item-1')) {
	store.dispatch({
		type: 'BUY_ITEM_AT_STORE',
		itemId: 'item-1',
	});
}

store.subscribe(() => saveState(store.getState()));

export default store;