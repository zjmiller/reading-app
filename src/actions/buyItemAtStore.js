export default function buyItemAtStore(itemId) {
	return (dispatch, getState) => {
		const item = getState().items.find(item => item.id === itemId);
		console.log(item.cost);
		
		// make sure player has enough $$
		
		for (const prop in item.cost) {
			console.log(prop, getState().session.wealth, item.cost[prop])
			if (getState().session.wealth[prop] < item.cost[prop]) return;
		}
		
		dispatch({
			type: 'BUY_ITEM_AT_STORE',
			itemId,
		})
	};
}