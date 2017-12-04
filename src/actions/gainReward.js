export default function gainReward(rewardType, quantity){
	return (dispatch, getState) => {
		dispatch({
			type: 'GAIN_REWARD',
			rewardType,
			quantity,
		})
	}
}