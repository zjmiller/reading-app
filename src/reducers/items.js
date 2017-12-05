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
			'HIGHLIGHT_TILES_IN_WORD',
		],
		cost: [
			{
				moneyType: 'GOLD_COIN',
				quantity: 5000,
			},
			{
				moneyType: 'BLUE_GEM',
				quantity: 30,
			},
		],
	}
];

export default function itemsReducer(state = initialState, action) {
	return state;
}