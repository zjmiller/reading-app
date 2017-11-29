import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerField from './AnswerField';
import EngagementBackground from './EngagementBackground';
import LettersPool from './LettersPool';
import WordAudioIcon from './WordAudioIcon';

class Engagement extends Component {
  render() {
		const { letters, word } = this.props;
		
    return (
      <div>
				{letters && <EngagementBackground />}
				<div
				 	style={{
					 	position: 'relative',
	 					zIndex: 2,
				 	}}
				>
				<WordAudioIcon word={word} />
				<AnswerField />
				<LettersPool />
				</div>
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