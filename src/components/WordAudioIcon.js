import React, { Component } from 'react';

import speakerIconImgSrc from '../assets/images/speaker-icon.svg';

function playAudio(url) {
	const audio = new Audio(url);
	audio.play();
}

class WordAudioIcon extends Component {
  render() {
		const { word } = this.props;
		
    return (
      <div 
				onClick={() => playAudio(word && word.audio)}
				style={{
					alignItems: 'center',
					background: 'rgba(250, 250, 251, 0.95)',
					boxShadow: '0 0 10px #000',
					borderRadius: '30px',
					cursor: 'pointer',
					display: 'flex',
					height: '60px',
					justifyContent: 'center',
					userSelect: 'none',
					width: '60px',
				}}
			>
        <img src={speakerIconImgSrc} style={{ width: '40px' }}/>
      </div>
    );
  }
}

export default WordAudioIcon;