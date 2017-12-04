import React, { Component } from 'react';
import { connect } from 'react-redux';

import blueGemImgSrc from '../assets/images/gemBlue.png';
import coinImgSrc from '../assets/images/coin.png';
import greenGemImgSrc from '../assets/images/gemGreen.png';
import redGemImgSrc from '../assets/images/gemRed.png';

class Wealth extends Component {
  render() {
		const { wealth } = this.props;
		
    return (
      <div
				style={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					fontFamily: 'Georgia',
					fontSize: '13px',
					height: '130px',
					position: 'fixed',
					justifyContent: 'space-between',
					right: '10px',
					top: '10px',
					zIndex: 3,
				}}
			>
        <div
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.85)',
						boxShadow: '2px 2px 5px #333',
						borderRadius: '25px',
						paddingRight: '10px',
					}}
				>
					<img src={coinImgSrc} style={{ width: '30px' }} />
					<span>{wealth['GOLD_COIN']}</span>
				</div>
				
				<div
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.85)',
						boxShadow: '2px 2px 5px #333',
						borderRadius: '25px',
						paddingRight: '8px',
					}}
				>
					<img src={blueGemImgSrc} style={{ width: '30px' }} />
					<span>{wealth['BLUE_GEM']}</span>
				</div>
				
				<div
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.85)',
						boxShadow: '2px 2px 5px #333',
						borderRadius: '25px',
						paddingRight: '8px',
					}}
				>
					<img src={greenGemImgSrc} style={{ width: '30px' }} />
					<span>{wealth['GREEN_GEM']}</span>
				</div>
				
				<div
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.85)',
						boxShadow: '2px 2px 5px #333',
						borderRadius: '25px',
						paddingRight: '8px',
					}}
				>
					<img src={redGemImgSrc} style={{ width: '30px' }} />
					<span>{wealth['RED_GEM']}</span>
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const wealth = state.session.wealth;
	return {
		wealth,
  };
};

export default connect(mapStateToProps)(Wealth);