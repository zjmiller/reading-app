export default function useItem(itemId) {
  return (dispatch, getState) => {
    const item = getState().items.find(item => item.id === itemId);
    item.effects.forEach(effectName => {
      if (effectName === 'MOVE_ALL_LETTERS_BACK_TO_POOL') {
        dispatch({
          type: 'MOVE_ALL_LETTERS_BACK_TO_POOL',
        });
      }

      if (effectName === 'HIGHLIGHT_TILES_IN_WORD') {
        dispatch({
          type: 'HIGHLIGHT_TILES_IN_WORD',
        });
      }

      if (effectName === 'FLASH_ANSWER_MODAL') {
        dispatch({
          type: 'SHOW_ANSWER_MODAL',
        });

        setTimeout(() => {
          dispatch({
            type: 'HIDE_ANSWER_MODAL',
          });
        }, 2000);
      }
    });

    dispatch({
      type: 'START_COOLDOWN_TIMER',
      itemId,
      cooldown: item.cooldown,
    });
  };
}
