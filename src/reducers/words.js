import shortid from 'shortid';

import batAudioUrl from '../assets/sounds/bat.m4a';
import beeAudioUrl from '../assets/sounds/bee.m4a';
import birdAudioUrl from '../assets/sounds/bird.m4a';
import catAudioUrl from '../assets/sounds/cat.m4a';
import crabAudioUrl from '../assets/sounds/crab.m4a';
import dogAudioUrl from '../assets/sounds/dog.m4a';
import fishAudioUrl from '../assets/sounds/fish.m4a';
import foxAudioUrl from '../assets/sounds/fox.m4a';
import frogAudioUrl from '../assets/sounds/frog.m4a';
import jumpAudioUrl from '../assets/sounds/jump.m4a';
import pigAudioUrl from '../assets/sounds/pig.m4a';
import ratAudioUrl from '../assets/sounds/rat.m4a';
import runAudioUrl from '../assets/sounds/run.m4a';
import sharkAudioUrl from '../assets/sounds/shark.m4a';
import sunAudioUrl from '../assets/sounds/sun.m4a';


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
		audio: pigAudioUrl,
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
		audio: batAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'Wm3mmcfsEnqaA',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/bat-gum-Wm3mmcfsEnqaA',
			},
			
			{
				iframeSrc: 'X1zfywreqWqIw',
				iframeWidth: '480',
				iframeHeight: '280',
				aHref: 'https://giphy.com/gifs/X1zfywreqWqIw',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'rat',
		audio: ratAudioUrl,
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
		audio: beeAudioUrl,
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
		audio: frogAudioUrl,
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
		audio: sunAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: '3ogwG0cKu7x87xU6VG',
				iframeWidth: '480',
				iframeHeight: '386',
				aHref: 'https://giphy.com/gifs/feistmusic-century-feist-3ogwG0cKu7x87xU6VG',
			},
			
			{
				iframeSrc: 'l0ExbqkAKqIrlWdI4',
				iframeWidth: '480',
				iframeHeight: '365',
				aHref: 'https://giphy.com/gifs/l0ExbqkAKqIrlWdI4',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'run',
		audio: runAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l2Sqc3POpzkj5r8SQ',
				iframeWidth: '480',
				iframeHeight: '201',
				aHref: 'https://giphy.com/gifs/run-forrest-gump-l2Sqc3POpzkj5r8SQ',
			},
			
			{
				iframeSrc: '26FKYPQg5CUfV2ipa',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/animation-run-super-deluxe-26FKYPQg5CUfV2ipa',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'jump',
		audio: jumpAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l2JJIfI6nUkm5AzoQ',
				iframeWidth: '480',
				iframeHeight: '240',
				aHref: 'https://giphy.com/gifs/l2JJIfI6nUkm5AzoQ',
			},
			
			{
				iframeSrc: '3o6Ztroynp3WpqLD1u',
				iframeWidth: '480',
				iframeHeight: '240',
				aHref: 'https://giphy.com/gifs/bbc-wildlife-3o6Ztroynp3WpqLD1u',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'bird',
		audio: birdAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'l1J9uG4jNOSsYtbkA',
				iframeWidth: '480',
				iframeHeight: '285',
				aHref: 'https://giphy.com/gifs/friday-shake-it-off-shoebill-stork-l1J9uG4jNOSsYtbkA',
			},
			
			{
				iframeSrc: 'efqBQ5OOnQehq',
				iframeWidth: '480',
				iframeHeight: '258',
				aHref: 'https://giphy.com/gifs/bird-standing-efqBQ5OOnQehq',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'fish',
		audio: fishAudioUrl,
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
		audio: sharkAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'nDhXcwufoptC0',
				iframeWidth: '480',
				iframeHeight: '284',
				aHref: 'https://giphy.com/gifs/fish-playful-splashing-7eVp9MHlNI90c',
			},
			
			{
				iframeSrc: 'SZzKe0HhRlthC',
				iframeWidth: '480',
				iframeHeight: '230',
				aHref: 'https://giphy.com/gifs/shark-shortfin-mako-SZzKe0HhRlthC',
			},
		],
	},
	
	{
		id: shortid.generate(),
		word: 'crab',
		audio: crabAudioUrl,
		giphyEmbeds: [
			{
				iframeSrc: 'odwOXY8XpcYWQ',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/crab-crustatean-gif-odwOXY8XpcYWQ',
			},
			
			{
				iframeSrc: 'l2Sq6SNEYMDQ8NtdK',
				iframeWidth: '480',
				iframeHeight: '270',
				aHref: 'https://giphy.com/gifs/originals-l2Sq6SNEYMDQ8NtdK',
			},
		],
	},
];

export default function wordsReducers(state = initialState, action) {
	return state;
}