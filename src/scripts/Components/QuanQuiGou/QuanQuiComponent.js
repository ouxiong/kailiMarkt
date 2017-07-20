
import FooterComponent from './../FooterComponent'
import MoudleAD from './moudleADBox/MoudleAD'



class QuanQuiComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render (){
		return(
			<div>
			    <div className="quanqui-header">
					<div className="quanqui-target-box"></div>
					<div className="quanqui-title">
						<span>全球购</span>
					</div>
					<div className="quanqui-target-box">
						<i className="iconfont icon-list"></i>
					</div>
					
				</div>


				

				
				<MoudleAD/>
				<FooterComponent active={this.props.route.path}/>


			</div>
			
		)
	}
}



export default QuanQuiComponent