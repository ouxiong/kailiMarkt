

import FooterComponent from './../FooterComponent'

import StraightHairHeaderComponent from "./StraightHairHeaderComponent"

import StraightHairArrangeComponent from "./StraightHairArrangeComponent"

import StraightHairMainComponent from "./StraightHairMainComponent"
class ZhiFaComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
	}

	render (){
		return(
			<div className="StraightHair">
			    <StraightHairHeaderComponent/>
				<StraightHairArrangeComponent/>
				<StraightHairMainComponent/>
				<FooterComponent active={this.props.route.path}/>


			</div>
			
		)
	}

	
}



export default ZhiFaComponent