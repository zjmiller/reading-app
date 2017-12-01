import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerField from './AnswerField';
import Carousel from './Carousel';
import EngagementBackground from './EngagementBackground';
import LettersPool from './LettersPool';
import Modal from './Modal';
import WordAudioIcon from './WordAudioIcon';

class Engagement extends Component {
  render() {
		const {
			letters,
			isReceivingReward,
			word,
		} = this.props;
		
    return (
      <div>
				<EngagementBackground />
				<div
				 	style={{
					 	position: 'relative',
	 					zIndex: 2,
				 	}}
				>
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<WordAudioIcon word={word} />
						<div style={{ height: '20px' }}></div>
						<Carousel />
					</div>
					<div style={{ height: '50px' }}></div>
					<AnswerField />
					<LettersPool />
					<Modal isReceivingReward={isReceivingReward} />
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	const engagement = state.engagements[state.engagements.length - 1];
	const word = state.words.find(word => word.id === engagement.wordId);
	const letters = engagement.lettersPool;
  return {
		isReceivingReward: state.session.engagementState === 'RECEIVING_REWARD',
		letters,
		word,
  };
};

export default connect(mapStateToProps)(Engagement);