export default function chestsReducer(state = [], action) {
  if (action.type === 'CREATE_REWARD_CARD') {
    return state.concat({
      id: action.id,
      isPremium: action.isPremium,
      isRevealed: false,
      rewardType: action.rewardType,
      quantity: action.quantity,
    });
  }

  if (action.type === 'REVEAL_REWARD_CARD') {
    return state.map(rewardCard => {
      if (rewardCard.id !== action.rewardCardId) return rewardCard;
      return Object.assign({}, rewardCard, {
        isRevealed: true,
      });
    });
  }

  return state;
}
