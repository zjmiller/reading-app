import { combineReducers } from 'redux';
import engagements from './engagements';
import words from './words';

export default combineReducers({
	engagements,
	words,
});