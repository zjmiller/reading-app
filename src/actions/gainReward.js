export default function gainReward(rewardType, quantity){
	return {
		type: 'GAIN_REWARD',
		rewardType,
		quantity,
	};
}