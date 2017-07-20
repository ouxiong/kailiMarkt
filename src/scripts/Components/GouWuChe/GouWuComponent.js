
import FooterComponent from './../FooterComponent'

class GouWuComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render (){
		return(
			<div>
			    GouWuComponent
				<FooterComponent active={this.props.route.path}/>

			</div>
			
		)
	}
}



export default GouWuComponent