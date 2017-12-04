import createAndEnterEngagement from './createAndEnterEngagement';

export default function loadNextEngagement() {
	return (dispatch, getState) => {
		dispatch(createAndEnterEngagement());
	}
}