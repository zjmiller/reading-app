import shortid from 'shortid';

import bookOfSecretsImgSrc from '../assets/images/tome.png';
import spyglassImgSrc from '../assets/images/spyglass.png';

export default [
	{
		id: 'item-1',
		type: 'MAGIC_SPYGLASS',
		name: 'Magic Spyglass',
		imgSrc: spyglassImgSrc,
		imgStyles: {
			filter: 'saturate(300%) hue-rotate(180deg)',
		},
		cooldown: 8,
		effects: [
			'MOVE_ALL_LETTERS_BACK_TO_POOL',
			'HIGHLIGHT_TILES_IN_WORD',
		],
		cost: [
			{
				moneyType: 'GOLD_COIN',
				quantity: 3000,
			},
			{
				moneyType: 'BLUE_GEM',
				quantity: 40,
			},
		],
	},
	
	{
		id: 'item-2',
		type: 'BOOK_OF_SECRETS',
		name: 'Book of Secrets',
		imgSrc: bookOfSecretsImgSrc,
		imgStyles: {
			backgroundColor: '#fefefe',
		},
		cooldown: 7,
		effects: [
			'FLASH_ANSWER_MODAL',
		],
		cost: [
			{
				moneyType: 'GOLD_COIN',
				quantity: 4000,
			},
			{
				moneyType: 'RED_GEM',
				quantity: 60,
			},
		],
	},
];