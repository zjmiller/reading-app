import shortid from 'shortid';
import createEngagement from './createEngagement';
import enterEngagement from './enterEngagement';

export default function createAndEnterEngagement() {
	return (dispatch, getState) => {
		const engagementId = shortid.generate();
		dispatch(createEngagement(engagementId));
		dispatch(enterEngagement(engagementId));
	};
}