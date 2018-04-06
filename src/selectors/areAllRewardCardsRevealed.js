import getCurrentEngagement from './getCurrentEngagement';

export default function areAllRewardCardsRevealed(state) {
  const engagement = getCurrentEngagement(state);
  if (!engagement) return true;

  const chest = state.chests.find(chest => chest.id === engagement.chestId);
  if (!chest) return true;

  const rewardCards = chest.rewardCards.map(rewardCardId =>
    state.rewardCards.find(rewardCard => rewardCard.id === rewardCardId)
  );

  return rewardCards.reduce((acc, rewardCard) => {
    return acc && rewardCard.isRevealed;
  }, true);
}
