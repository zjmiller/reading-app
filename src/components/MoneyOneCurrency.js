import React, { Component } from 'react';

import blueGemImgSrc from '../assets/images/gemBlue.png';
import coinImgSrc from '../assets/images/coin.png';
import greenGemImgSrc from '../assets/images/gemGreen.png';
import redGemImgSrc from '../assets/images/gemRed.png';

class MoneyOneCurrency extends Component {
  render() {
		const { moneyType, quantity, style } = this.props;
		
		let imgSrc;
		if (moneyType === 'GOLD_COIN') imgSrc = coinImgSrc;
		else if (moneyType === 'BLUE_GEM') imgSrc = blueGemImgSrc;
		else if (moneyType === 'GREEN_GEM') imgSrc = greenGemImgSrc;
		else if (moneyType === 'RED_GEM') imgSrc = redGemImgSrc;
		
    return (
			<div
				style={Object.assign({
					backgroundColor: 'rgba(255, 255, 255, 0.85)',
					boxShadow: '2px 2px 5px #333',
					borderRadius: '25px',
					fontFamily: 'Georgia',
					fontSize: '13px',
					paddingRight: '10px',
					userSelect: 'none',
				}, style)}
			>
				<img alt="Some Money or a Gem" src={imgSrc} style={{ width: '30px' }} />
				<span>{quantity}</span>
			</div>
    );
  }
}

export default MoneyOneCurrency;