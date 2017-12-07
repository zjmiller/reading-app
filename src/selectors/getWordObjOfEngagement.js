import getEngagementById from './getEngagementById';
import getWordObjById from './getWordObjById';

export default function getWordObjOfEngagement(state, engagement) {
	if (typeof engagement !== 'object') {
		engagement = getEngagementById(state, engagement);
	}
	
	const wordId = engagement.wordId;
	const word = getWordObjById(state, wordId);
	return word;
}	