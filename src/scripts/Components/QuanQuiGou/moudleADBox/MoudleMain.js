
import MoudleMainItem from "./MoudleMainItem"

class MoudleMain extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render(){
		return(
			<div className="moudleMain">
				<MoudleMainItem/>
			</div>
		)
	}
}



export default MoudleMain