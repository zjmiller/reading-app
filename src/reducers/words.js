import shortid from 'shortid';

const initialState = [
	{
		id: shortid.generate(),
		word: 'cat',
	},
	
	{
		id: shortid.generate(),
		word: 'dog',
	},
	
	{
		id: shortid.generate(),
		word: 'fox',
	},
];

export default function wordsReducers(state = initialState, action) {
	return state;
}