import loadNextEngagement from './loadNextEngagement';

import areAllRewardCardsRevealed from '../selectors/areAllRewardCardsRevealed';

export default function closeRewardModal() {
  return (dispatch, getState) => {
    if (areAllRewardCardsRevealed(getState())) {
      dispatch(loadNextEngagement());
    }
  };
}
