

import MoudleADItem from './MoudleADItem'

import MoudleMain from "./MoudleMain"

class MoudleAD extends React.Component{
	constructor(props,context){
		super(props,context)
	}

	ComponentWillMount(){

	}
	render(){
		return(
			<div >
				
				<MoudleADItem/>
				<MoudleMain/>
			</div>
			
		)
	}
}



export default MoudleAD