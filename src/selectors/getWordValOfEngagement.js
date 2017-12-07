import getEngagementById from './getEngagementById';
import getWordObjOfEngagement from './getWordObjOfEngagement';
import getWordValOfWordObj from './getWordValOfWordObj';

export default function getWordValOfEngagement(state, engagement) {
	const wordObj = getWordObjOfEngagement(state, engagement);
	return getWordValOfWordObj(state, wordObj);
}