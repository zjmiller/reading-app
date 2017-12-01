import shortid from 'shortid';
import getRandomUpperCaseLetter from '../util/getRandomUpperCaseLetter';
import createLetter from './createLetter';
import backgroundImageSrc from '../assets/images/battleback10.png'
import getRandomWord from '../selectors/getRandomWord';
import shuffleArray from '../util/shuffleArray';

export default function createEngagement(engagementId) {
	return (dispatch, getState) => {
		const word = getRandomWord(getState());
		const wordId = word.id;
		const wordLetters = word.word.split('').map(s => s.toUpperCase());
		
		let lettersPool = wordLetters.concat();
		for (let i = 0; i < 5; i++) {
			lettersPool = lettersPool.concat(getRandomUpperCaseLetter());
		}
		
		lettersPool = shuffleArray(lettersPool);
		
		const letterIds = [];
		lettersPool.forEach((letter, i) => {
			const letterId = shortid.generate();
			createLetter(dispatch, getState, letterId, letter);
			letterIds[i] = letterId;
		});
		
		dispatch({
			type: 'CREATE_ENGAGEMENT',
			id: engagementId,
			backgroundImageSrc,
			wordId,
			lettersPool: letterIds,
		});
	}
}