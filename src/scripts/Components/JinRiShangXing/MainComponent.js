
/* 今日上新 */
import HeaderComponent from './Header/HeaderComponent'
import BannerComponent from './Banner/BannerComponent'
import LinkComponent from './Links/LinkComponent'
import FooterComponent from './../FooterComponent'
import ADComponent from './ADComponent'
import ContentComponent from './Content/ContentComponent'

class MainComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
	}

	componentWillMount(){
		$.ajax({
			url:'https://jas.juanpi.com/pagetag/page?unique=module_ads%2Cbanner_ads%2Ctopbanner%2Cpopup_ads&cat_name=newest_zhe&zy_id=c3_l1_18_51_5&platform=m&_=1500346366882&callback=jsonp1',
			dataType:"jsonp",
			success:function(data){
				// console.log(data)
				localStorage.pageDate=JSON.stringify(data);
				// console.log(JSON.parse(localStorage.pageDate))
			}
		})
	}

	


	
	render (){
		return(
			<div >
				<HeaderComponent/>
                <BannerComponent/>
                <LinkComponent/>
				<ADComponent/>
				<ContentComponent/>
                <FooterComponent active={this.props.route.path}  />

			</div>
			
		)
	}
}



export default MainComponent



