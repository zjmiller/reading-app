const initialState = {
	currentScreen: undefined,
	previousScreen: undefined,
	inEngagement: false,
	wealth: {
		'GOLD_COIN': 0,
		'BLUE_GEM': 0,
		'GREEN_GEM': 0,
		'RED_GEM': 0,
	},
	wordsSoFar: [],
	items: [],
};

export default function sessionReducer(state = initialState, action) {
	if (action.type === 'SET_WEALTH') {
		return Object.assign(
			{},
			state,
			{
				wealth: action.wealth,
			}
		);
	}
	
	if (action.type === 'NAVIGATE_TO_STORE_SCREEN') {
		return Object.assign(
			{},
			state,
			{
				currentScreen: 'STORE',
				previousScreen: state.currentScreen,
			}
		);
	}
	
	if (action.type === 'BUY_ITEM_AT_STORE') {
		return Object.assign(
			{},
			state,
			{
				items: state.items.concat({
					itemId: action.itemId,
					cooldownTimer: 0,
				}),
			}
		);
	}
	
	if (action.type === 'NAVIGATE_BACK') {
		return Object.assign(
			{},
			state,
			{
				currentScreen: state.previousScreen,
				previousScreen: state.currentScreen,
			}
		);
	}
	
	if (action.type === 'ENTER_ENGAGEMENT') {
		return Object.assign(
			{},
			state,
			{
				currentScreen: 'ENGAGEMENT',
				previousScreen: state.currentScreen,
				inEngagement: action.engagementId,
				engagementState: 'ANSWERING',
				receivingRewardState: false,
				wordsSoFar: state.wordsSoFar.concat(action.word),
			}
		);
	}
	
	if (action.type === 'SUCCESSFUL_ENGAGEMENT') {
		return Object.assign(
			{},
			state,
			{
				engagementState: 'RECEIVING_REWARD',
				receivingRewardState: 'CHEST_APPEARING',
				items: state.items.map(item => {
					return Object.assign(
						{},
						item,
						{
							cooldownTimer: item.cooldownTimer - 1,
						}
					);
				}),
			}
		);
	}
	
	if (action.type === 'OPEN_CHEST') {
		return Object.assign(
			{},
			state,
			{
				receivingRewardState: 'CHEST_OPENED',
			}
		);
	}
	
	if (action.type === 'GAIN_REWARD') {
		return Object.assign(
			{},
			state,
			{
				wealth: Object.assign(
					{},
					state.wealth,
					{
						[action.rewardType]: state.wealth[action.rewardType] + action.quantity,
					}
				),
			}
		);
	}
	
	if (action.type === 'SUBTRACT_WEALTH') {
		return Object.assign(
			{},
			state,
			{
				wealth: Object.assign(
					{},
					state.wealth,
					{
						[action.rewardType]: state.wealth[action.rewardType] - action.quantity,
					}
				),
			}
		);
	}
	
	if (action.type === 'START_COOLDOWN_TIMER') {
		return Object.assign(
			{},
			state,
			{
				items: state.items.map(item => {
					if (item.itemId !== action.itemId) return item;
					else return Object.assign(
						{},
						item,
						{
							cooldownTimer: 9,
						}
					);
				}),
			}
		);
	}
	
	return state;
}