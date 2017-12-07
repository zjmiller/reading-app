import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnswerField from './AnswerField';
import Carousel from './Carousel';
import EngagementBackground from './EngagementBackground';
import LettersPool from './LettersPool';
import Modal from './Modal';
import PlayerItem from './PlayerItem';
import ToggleCaseBtn from './ToggleCaseBtn';
import WordAudioIcon from './WordAudioIcon';

import getCurrentEngagement from '../selectors/getCurrentEngagement';
import getWordObjOfEngagement from '../selectors/getWordObjOfEngagement';

class Engagement extends Component {
  render() {
		const {
			letters,
			isReceivingReward,
			playerItems,
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
						<div
							style={{
								display: 'flex',
							}}
						>
							<ToggleCaseBtn />
							<WordAudioIcon
								style={{ marginLeft: '10px' }}
								word={word}
							/>
							{
								playerItems.map((playerItem, i) =>
									<PlayerItem 
										key={i}
										playerItem={playerItem}
										style={{ marginLeft: '10px' }}
									/>
								)
							}
						</div>
						<div style={{ height: '20px' }}></div>
						<Carousel />
					</div>
					<div style={{ height: '30px' }}></div>
					<AnswerField />
					<LettersPool />
					<Modal />
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	const engagement = getCurrentEngagement(state);
	const word = getWordObjOfEngagement(state, engagement);
	const letters = engagement.lettersPool;
	const playerItems = state.session.items;
  return {
		letters,
		playerItems,
		word,
  };
};

export default connect(mapStateToProps)(Engagement);