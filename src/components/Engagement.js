import React, { Component } from 'react';
import { connect } from 'react-redux';
import LettersPool from './LettersPool';
import WordAudioIcon from './WordAudioIcon';

class Engagement extends Component {
  render() {
		const { word } = this.props;
		
    return (
      <div>
				<WordAudioIcon word={word} />
				<LettersPool />
      </div>
    );
  }
}

const mapStateToProps = state => {
	if (state.engagements.length === 0) return {};
	const engagement = state.engagements[state.engagements.length - 1];
	const word = state.words.find(word => word.id === engagement.wordId);
	
  return {
		word: word,
  };
};

export default connect(mapStateToProps)(Engagement);