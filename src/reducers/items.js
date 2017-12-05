import shortid from 'shortid';

import spyglassImgSrc from '../assets/images/spyglass.png';

const initialState = [
	{
		id: shortid.generate(),
		type: 'MAGIC_SPYGLASS',
		name: 'Magic Spyglass',
		imgSrc: spyglassImgSrc,
		cooldown: 10,
		effects: [
			'MOVE_ALL_LETTERS_BACK_TO_POOL',
			'HIGHLIGHT_TILES_IN_WORD',
		],
		cost: [
			{
				moneyType: 'GOLD_COIN',
				quantity: 50,
			},
			{
				moneyType: 'BLUE_GEM',
				quantity: 3,
			},
		],
	}
];

export default function itemsReducer(state = initialState, action) {
	return state;
}