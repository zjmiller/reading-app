import getRandomWord from '../selectors/getRandomWord';

export default function createEngagement() {
	console.log('h')
	return (dispatch, getState) => {
		const word = getRandomWord(getState());
		const wordId = word.id;
		
		dispatch({
			type: 'CREATE_ENGAGEMENT',
			wordId,
		});
	}
}