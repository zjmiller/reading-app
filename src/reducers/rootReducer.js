import { combineReducers } from 'redux';
import chests from './chests';
import engagements from './engagements';
import items from './items';
import letters from './letters';
import rewardCards from './rewardCards';
import session from './session';
import words from './words';

export default combineReducers({
	chests,
	engagements,
	items,
	letters,
	rewardCards,
	session,
	words,
});