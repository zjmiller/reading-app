import React, { Component } from 'react';

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
					background: 'rgba(255, 255, 255, 0.95)',
					boxShadow: '0 0 10px #000',
					borderRadius: '40px',
					display: 'flex',
					height: '80px',
					fontSize: '48px',
					justifyContent: 'center',
					width: '80px',
				}}
			>
        &#128266;
      </div>
    );
  }
}

export default WordAudioIcon;