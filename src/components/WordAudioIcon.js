import React, { Component } from 'react';

import speakerIconImgSrc from '../assets/images/speaker-icon.svg';

class WordAudioIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playingAudio: false,
		};
	}
	
	playAudio = url => {
		if (this.state.playingAudio) return;
		const audio = new Audio(url);
		audio.play();
		this.setState({ playingAudio: true });
		setTimeout(() => { this.setState({ playingAudio: false })}, 2000);
	}
	
  render() {
		const { word } = this.props;
		
    return (
      <div 
				onClick={() => this.state.playingAudio ? '' : this.playAudio(word && word.audio)}
				style={{
					alignItems: 'center',
					background: 'rgba(250, 250, 251, 0.95)',
					boxShadow: '0 0 10px #000',
					borderRadius: '30px',
					cursor: this.state.playingAudio ? 'auto' : 'pointer',
					display: 'flex',
					height: '60px',
					justifyContent: 'center',
					opacity: this.state.playingAudio ? 0.5 : 1,
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