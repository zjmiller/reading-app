export default function canPlayerAffordItem(state, itemId) {
	const item = state.items.find(item => item.id === itemId);
	
	for (let i = 0; i < item.cost.length; i++) {
		if (state.session.wealth[item.cost[i].moneyType] < item.cost[i].quantity) return false;
	}
	
	return true;
}