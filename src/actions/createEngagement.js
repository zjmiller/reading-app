import shortid from 'shortid';

import clearCompletedWordsCache from './clearCompletedWordsCache';
import createLetter from './createLetter';

import backgroundImageSrc from '../assets/images/battleback10.png';
import getNewRandomWord from '../selectors/getNewRandomWord';
import hasCompletedAllWords from '../selectors/hasCompletedAllWords';
import getRandomUpperCaseLetter from '../util/getRandomUpperCaseLetter';
import shuffleArray from '../util/shuffleArray';

export default function createEngagement(engagementId) {
  return (dispatch, getState) => {
    if (hasCompletedAllWords(getState())) dispatch(clearCompletedWordsCache());
    const word = getNewRandomWord(getState());
    const wordId = word.id;
    const wordLetters = word.word.split('').map(s => s.toUpperCase());

    const lettersInWord = wordLetters.concat();

    let letterIds = [];
    lettersInWord.forEach((letter, i) => {
      const letterId = shortid.generate();
      const isInWord = true;
      createLetter(dispatch, getState, letterId, letter, isInWord);
      letterIds.push(letterId);
    });

    for (let i = 0; i < Math.min(5, 9 - lettersInWord.length); i++) {
      const randomUpperCaseLetter = getRandomUpperCaseLetter();
      const letterId = shortid.generate();
      const isInWord = false;
      createLetter(
        dispatch,
        getState,
        letterId,
        randomUpperCaseLetter,
        isInWord
      );
      letterIds.push(letterId);
    }

    letterIds = shuffleArray(letterIds);

    dispatch({
      type: 'CREATE_ENGAGEMENT',
      id: engagementId,
      backgroundImageSrc,
      wordId,
      lettersPool: letterIds,
    });
  };
}
