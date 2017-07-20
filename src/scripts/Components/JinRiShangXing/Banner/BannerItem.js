


class BannerItem extends React.Component{
	render (){
		return(
			<div className="swiper-slide">
	        	<a href="#">
	        		<img src={this.props._banner}/>	
	        	</a>
	        </div>
			
		)
	}
}



export default BannerItem