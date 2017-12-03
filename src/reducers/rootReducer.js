import { combineReducers } from 'redux';
import chests from './chests';
import engagements from './engagements';
import letters from './letters';
import rewardCards from './rewardCards';
import session from './session';
import words from './words';

export default combineReducers({
	chests,
	engagements,
	letters,
	rewardCards,
	session,
	words,
});