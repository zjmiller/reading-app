export default function buyItemAtStore(itemId) {
  return (dispatch, getState) => {
    const item = getState().items.find(item => item.id === itemId);

    // make sure player has enough $$
    for (let i = 0; i < item.cost.length; i++) {
      if (
        getState().session.wealth[item.cost[i].moneyType] <
        item.cost[i].quantity
      )
        return;
    }

    // make sure player has enough $$
    for (let i = 0; i < item.cost.length; i++) {
      dispatch({
        type: 'SUBTRACT_WEALTH',
        rewardType: item.cost[i].moneyType,
        quantity: item.cost[i].quantity,
      });
    }

    dispatch({
      type: 'BUY_ITEM_AT_STORE',
      itemId,
    });
  };
}
