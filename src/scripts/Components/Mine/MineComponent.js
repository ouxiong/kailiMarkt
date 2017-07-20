import FooterComponent from './../FooterComponent'

import MineHeaderComponent from "./MineHeaderComponent"
class MineComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render (){
		return(
			<div className="mine">
			    <MineHeaderComponent/>
				<FooterComponent active={this.props.route.path}/>

			</div>
			
		)
	}
}



export default MineComponent