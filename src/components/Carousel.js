import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider  from 'react-slick';

const settings = {
	adaptiveHeight: true,
	fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
	swipe: true,
};

class Carousel extends Component {
  render() {
		const { giphyEmbeds } = this.props;
		
    return (
			<div style={{ width: '600px'}}>
			{
				giphyEmbeds
				?
				<Slider {...settings}>
					{
						(giphyEmbeds || []).map(info => (
							<div style={{
								alignItems: 'center',
								background: '#000',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								padding: '20px',
							}}>
								<iframe 
									style={{
										backgroundColor: '#000',
										border: '5px solid #000',
									}}
									title="gif from Giphy"
									src={`https://giphy.com/embed/${info.iframeSrc}`}
									width={info.iframeWidth}
									height={info.iframeHeight} 
									frameBorder="0"
									className="giphy-embed" 
									allowFullScreen />
								<p>
									<a 
										href={info.aHref}
										style={{
											color: 'rgb(200, 200, 255)',
											textDecoration: 'none',
										}}
									>via GIPHY</a>
								</p>
							</div>
						))
					}
				</Slider>
				:
				<div />
			}
			</div>
    );
  }
}

const mapStateToProps = state => {
	const engagement = state.engagements[state.engagements.length - 1];
	const word = state.words.find(word => word.id === engagement.wordId);
	return {
		giphyEmbeds: word.giphyEmbeds || [],
	};
};

export default connect(mapStateToProps)(Carousel);