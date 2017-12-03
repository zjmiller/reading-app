import shortid from 'shortid';

import catAudioUrl from '../assets/sounds/cat.m4a';
import dogAudioUrl from '../assets/sounds/dog.m4a';
import foxAudioUrl from '../assets/sounds/fox.m4a';

const initialState = [
	{
		id: shortid.generate(),
		word: 'cat',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: '6uMqzcbWRhoT6',
				iframeWidth: '480',
				iframeHeight: '360',
				aHref: 'https://giphy.com/gifs/cat-animal-kitten-6uMqzcbWRhoT6',
			},
			
			{
				iframeSrc: 'VxbvpfaTTo3le',
				iframeWidth: '480',
				iframeHeight: '262',
				aHref: 'https://giphy.com/gifs/cat-kitten-kitty-VxbvpfaTTo3le',
			},
			
			{
				iframeSrc: 'MDJ9IbxxvDUQM',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/cat-kisses-hugs-MDJ9IbxxvDUQM',
			},
			
		],
	},
	
	{
		id: shortid.generate(),
		word: 'dog',
		audio: dogAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l41m0CPz6UCnaUmxG',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/tired-sleepy-goodnight-l41m0CPz6UCnaUmxG',
			},
			
			{
				iframeSrc: 'oebOcslmnSXMQ',
				iframeWidth: '480',
				iframeHeight: '237',
				aHref: 'https://giphy.com/gifs/july-great-oebOcslmnSXMQ',
			},
			
			{
				iframeSrc: 'EAbMgjdtduMdq',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/dog-day-yr-EAbMgjdtduMdq',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'fox',
		audio: foxAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'LvHBV2O3aFqBG',
				iframeWidth: '480',
				iframeHeight: '258',
				aHref: 'https://giphy.com/gifs/headlikeanorange-fox-red-springwatch-LvHBV2O3aFqBG',
			},
			
			{
				iframeSrc: 'qkdTy6tTmF7Xy',
				iframeWidth: '480',
				iframeHeight: '342',
				aHref: 'https://giphy.com/gifs/fox-qkdTy6tTmF7Xy',
			},
			
			{
				iframeSrc: 'xsE65jaPsUKUo',
				iframeWidth: '480',
				iframeHeight: '349',
				aHref: 'https://giphy.com/gifs/fox-animal-kawaii-xsE65jaPsUKUo',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'pig',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'WsVJuYCz6qgJG',
				iframeWidth: '480',
				iframeHeight: '276',
				aHref: 'https://giphy.com/gifs/cute-video-animal-WsVJuYCz6qgJG',
			},
			
			{
				iframeSrc: '5odBbOYQN3UaY',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/pig-little-piggeeehh-5odBbOYQN3UaY',
			},

			{
				iframeSrc: 'HV6uVZWJDJ42c',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/swimming-pig-HV6uVZWJDJ42c',
			},
			
			{
				iframeSrc: 'E5TVttEnaz4ME',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/E5TVttEnaz4ME',
			},
		],
	},
];

export default function wordsReducers(state = initialState, action) {
	return state;
}