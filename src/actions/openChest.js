export default function openChest() {
	return (dispatch, getState) => {
		dispatch({
			type: 'OPEN_CHEST',
		});
	};
}