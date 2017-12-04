import saveWealthInformation from '../api/saveWealthInformation';

export default function gainReward(rewardType, quantity){
	return (dispatch, getState) => {
		dispatch({
			type: 'GAIN_REWARD',
			rewardType,
			quantity,
		});
		
		saveWealthInformation(getState());
	}
}