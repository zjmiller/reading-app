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
		});
		
		dispatch({
			type: 'START_COOLDOWN_TIMER',
			itemId,
		})
	};
}