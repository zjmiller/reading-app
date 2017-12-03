import createChest from './createChest';

export default function succeedAtEngagement() {
	return (dispatch, getState) => {
		dispatch(createChest());
		dispatch({
			type: 'SUCCESSFUL_ENGAGEMENT',
		});
	};
}