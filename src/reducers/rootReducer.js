import { combineReducers } from 'redux';
import engagements from './engagements';
import letters from './letters';
import words from './words';

export default combineReducers({
	engagements,
	letters,
	words,
});