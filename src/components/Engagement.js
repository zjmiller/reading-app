import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerField from './AnswerField';
import LettersPool from './LettersPool';
import WordAudioIcon from './WordAudioIcon';

class Engagement extends Component {
  render() {
		const { letters, word } = this.props;
		
    return (
      <div>
				<WordAudioIcon word={word} />
				<AnswerField />
				<LettersPool letters={letters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
	if (state.engagements.length === 0) return {};
	const engagement = state.engagements[state.engagements.length - 1];
	const word = state.words.find(word => word.id === engagement.wordId);
	const letters = engagement.lettersPool;
  return {
		letters,
		word,
  };
};

export default connect(mapStateToProps)(Engagement);