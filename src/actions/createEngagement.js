import getRandomUpperCaseLetter from '../util/getRandomUpperCaseLetter';
import getRandomWord from '../selectors/getRandomWord';
import shuffleArray from '../util/shuffleArray';

export default function createEngagement() {
	return (dispatch, getState) => {
		const word = getRandomWord(getState());
		const wordId = word.id;
		const wordLetters = word.word.split('').map(s => s.toUpperCase());
		
		let lettersPool = wordLetters.concat();
		for (let i = 0; i < 5; i++) {
			lettersPool = lettersPool.concat(getRandomUpperCaseLetter());
		}
		
		lettersPool = shuffleArray(lettersPool);
		
		dispatch({
			type: 'CREATE_ENGAGEMENT',
			wordId,
			lettersPool,
		});
	}
}