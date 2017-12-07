import getEngagementById from './getEngagementById';
import getWordById from './getWordById';

export default function getWordObjOfEngagement(state, engagement) {
	if (typeof engagement !== 'object') {
		engagement = getEngagementById(state, engagement);
	}
	
	const wordId = engagement.wordId;
	const word = getWordById(state, wordId);
	return word;
}