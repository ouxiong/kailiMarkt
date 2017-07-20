
require("./styles/app.scss")





/* import RootComponent from "./scripts/Components/RootComponent"

ReactDOM.render(<RootComponent/>,document.getElementById("root")) */

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RootComponent from './scripts/Components/RootComponent'
/* 购物车 */
import GouWuComponent from './scripts/Components/GouWuChe/GouWuComponent'
/* 今日上新 */
import MainComponent from './scripts/Components/JinRiShangXing/MainComponent'
/* 我的 */
import MineComponent from './scripts/Components/Mine/MineComponent'
/* 全球购 */
import QuanQuiComponent from './scripts/Components/QuanQuiGou/QuanQuiComponent'
/* 直发仓 */
import ZhiFaComponent from './scripts/Components/ZhiFaCang/ZhiFaComponent'



//<IndexRedirect to="/main"/>
// <IndexRoute component={MainComponent} />
ReactDOM.render(
	
	<Router history={hashHistory}>
		<Route path="/" component={RootComponent}>
			<IndexRedirect to="/main"/>
			<Route path="main" component={MainComponent}></Route>
			<Route path="gouwu" component={GouWuComponent}></Route>
			<Route path="mine" component={MineComponent}></Route>
			<Route path="quanqui" component={QuanQuiComponent}></Route>
			<Route path="zhifa" component={ZhiFaComponent}></Route>
			<Route path="*" component={MainComponent}></Route>
		</Route>
	</Router>
	
	,document.getElementById("root"))




