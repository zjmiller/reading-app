import React, { Component } from 'react';
import { connect } from 'react-redux';

import revealRewardCard from '../actions/revealRewardCard';

import blueGemImgSrc from '../assets/images/gemBlue.png';
import cardBackImgSrc from '../assets/images/card-back.jpeg';
import coinImgSrc from '../assets/images/coin.png';
import greenGemImgSrc from '../assets/images/gemGreen.png';
import redGemImgSrc from '../assets/images/gemRed.png';

class RewardCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false,
		}
	}
	
  render() {
		
		const {
			handleRevealRewardCard,
			rewardCard,
		} = this.props;
		
		const {
			quantity,
			rewardType,
		} = rewardCard;
		
		const rewardCardId = rewardCard.id;
		
		const imgSrc = function(){
			if (rewardType === 'GOLD_COIN') return coinImgSrc;
			if (rewardType === 'BLUE_GEM') return blueGemImgSrc;
			if (rewardType === 'GREEN_GEM') return greenGemImgSrc;
			if (rewardType === 'RED_GEM') return redGemImgSrc;
		}();
		
    return (
			<div className={this.state.isFlipped ? 'flipcard is-flipped' : 'flipcard'}>
				<div className="flipcard--front">
					<img
						onClick={() => {
							handleRevealRewardCard(rewardCardId);
							this.setState({ isFlipped: true });
						}}
						src={cardBackImgSrc}
						style={{
							border: '2px solid #333',
							borderRadius: '8px',
							boxShadow: '0px 0px 5px #333',
							cursor: 'pointer',
							height: `${217*(this.props.cardWidth/180)}px`,
							marginLeft: '20px',
							marginRight: '20px',
							transition: 'height 0.4s cubic-bezier(1,.46,.41,1.46), width 0.4s cubic-bezier(1,.46,.41,1.46)',
							width: `${this.props.cardWidth}px`,
						}} 
					/>
				</div>
				<div
					className="flipcard--back"
					style={{
						alignItems: 'center',
						backgroundColor: '#f5f5dc',
						border: '2px solid #333',
						borderRadius: '8px',
						boxShadow: '0px 0px 5px #333',
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '20px',
						marginRight: '20px',
						height: `${217*(this.props.cardWidth/180)}px`,
						justifyContent: 'center',
						width: `${this.props.cardWidth}px`,
					}}
				>
				
					<span
						style={{
							fontFamily: 'Georgia',
							fontSize: '36px'
						}}
					>
						{ quantity }
					</span>
					<img src={imgSrc} />
				</div>
			</div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  handleRevealRewardCard: rewardCardId => dispatch(revealRewardCard(rewardCardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardCard);