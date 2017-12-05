export default function navigateToStoreScreen(state) {
	return (dispatch, getState) => {
		dispatch({
			type: 'NAVIGATE_TO_STORE_SCREEN',
		});
	};
}