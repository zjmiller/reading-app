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

	{
		id: shortid.generate(),
		word: 'bat',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'Wm3mmcfsEnqaA',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/bat-gum-Wm3mmcfsEnqaA',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'rat',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'gOH54eiriYIwM',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/costume-gOH54eiriYIwM',
			},
			
			{
				iframeSrc: 'q15EjVC1dBbOM',
				iframeWidth: '480',
				iframeHeight: '363',
				aHref: 'https://giphy.com/gifs/q15EjVC1dBbOM',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'bee',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'SSUyICBgb3tYI',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/bees-SSUyICBgb3tYI',
			},
			
			{
				iframeSrc: '5HXevEAuRyily',
				iframeWidth: '480',
				iframeHeight: '374',
				aHref: 'https://giphy.com/gifs/5HXevEAuRyily',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'frog',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'ytAW7lMP77p5e',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/bbc-frog-amphibian-ytAW7lMP77p5e',
			},
			
			{
				iframeSrc: '4N4JBFo45PVPa',
				iframeWidth: '480',
				iframeHeight: '258',
				aHref: 'https://giphy.com/gifs/tongue-frog-insect-4N4JBFo45PVPa',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'sun',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: '3ogwG0cKu7x87xU6VG',
				iframeWidth: '480',
				iframeHeight: '386',
				aHref: 'https://giphy.com/gifs/feistmusic-century-feist-3ogwG0cKu7x87xU6VG',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'run',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l2Sqc3POpzkj5r8SQ',
				iframeWidth: '480',
				iframeHeight: '201',
				aHref: 'https://giphy.com/gifs/run-forrest-gump-l2Sqc3POpzkj5r8SQ',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'jump',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l2JJIfI6nUkm5AzoQ',
				iframeWidth: '480',
				iframeHeight: '240',
				aHref: 'https://giphy.com/gifs/l2JJIfI6nUkm5AzoQ',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'bird',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l1J9uG4jNOSsYtbkA',
				iframeWidth: '480',
				iframeHeight: '285',
				aHref: 'https://giphy.com/gifs/friday-shake-it-off-shoebill-stork-l1J9uG4jNOSsYtbkA',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'fish',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: '7eVp9MHlNI90c',
				iframeWidth: '480',
				iframeHeight: '380',
				aHref: 'https://giphy.com/gifs/fish-playful-splashing-7eVp9MHlNI90c',
			},
			
			{
				iframeSrc: 'sxXJgb4LCmJ44',
				iframeWidth: '480',
				iframeHeight: '117',
				aHref: 'https://giphy.com/gifs/clown-fish-sxXJgb4LCmJ44',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'shark',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'nDhXcwufoptC0',
				iframeWidth: '480',
				iframeHeight: '284',
				aHref: 'https://giphy.com/gifs/fish-playful-splashing-7eVp9MHlNI90c',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'crab',
		audio: catAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'odwOXY8XpcYWQ',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/crab-crustatean-gif-odwOXY8XpcYWQ',
			},
		],
	},
];

export default function wordsReducers(state = initialState, action) {
	return state;
}