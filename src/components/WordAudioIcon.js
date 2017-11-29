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
					fontSize: '48px',
				}}
			>
        &#128266;
      </div>
    );
  }
}

export default WordAudioIcon;