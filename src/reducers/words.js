import shortid from 'shortid';

import catAudioUrl from '../assets/sounds/cat.m4a';
import dogAudioUrl from '../assets/sounds/dog.m4a';
import foxAudioUrl from '../assets/sounds/fox.m4a';

const initialState = [
	{
		id: shortid.generate(),
		word: 'cat',
		audio: catAudioUrl,
	},
	
	{
		id: shortid.generate(),
		word: 'dog',
		audio: dogAudioUrl,
	},
	
	{
		id: shortid.generate(),
		word: 'fox',
		audio: foxAudioUrl,
	},
];

export default function wordsReducers(state = initialState, action) {
	return state;
}