import getWordObjOfEngagement from './getWordObjOfEngagement';
import getWordValOfWordObj from './getWordValOfWordObj';

export default function getWordValOfEngagement(state, engagement) {
  const wordObj = getWordObjOfEngagement(state, engagement);
  const wordVal = getWordValOfWordObj(state, wordObj);
  return wordVal;
}
