import React, { Component } from 'react';
import { connect } from 'react-redux';

import blueGemImgSrc from '../assets/images/gemBlue.png';
import coinImgSrc from '../assets/images/coin.png';
import greenGemImgSrc from '../assets/images/gemGreen.png';
import redGemImgSrc from '../assets/images/gemRed.png';

import cardBackImgSrc from '../assets/images/card-back.jpeg';

class RewardCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false,
			cardWidth: 180,
		}
	}
	
  render() {
		const {
			quantity,
			rewardType,
		} = this.props.rewardCard;
		
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
						onClick={() => this.setState({ isFlipped: true })}
						src={cardBackImgSrc}
						style={{
							border: '2px solid #333',
							borderRadius: '8px',
							boxShadow: '0px 0px 5px #333',
							cursor: 'pointer',
							height: `${217*(this.state.cardWidth/180)}px`,
							marginLeft: '20px',
							marginRight: '20px',
							transition: 'height 0.4s cubic-bezier(1,.46,.41,1.46), width 0.4s cubic-bezier(1,.46,.41,1.46)',
							width: `${this.state.cardWidth}px`,
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
						height: `${217*(this.state.cardWidth/180)}px`,
						justifyContent: 'center',
						width: `${this.state.cardWidth}px`,
					}}
				>
				
					<span
						style={{
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

export default connect(mapStateToProps)(RewardCard);