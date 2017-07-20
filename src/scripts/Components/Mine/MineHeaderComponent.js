

class MineHeaderComponent extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render (){
		return(
			<div className="mine-app">
			    <div className="userCenter">
					<header id="head">
						<div className="userTop">
							<a id="t-goback" href="javascript:window.history.go(-1)">
              					<span className="iconfont icon-jiantou-copy-copy"></span>
           					 </a>
							<span id="t-index">个人中心</span>
						</div>
						<div className="user-login">
							<a href="//m.juanpi.com/user/register">注册</a>
							<i className="line"></i>
							<a href="//m.juanpi.com/user/login">登录</a>
						</div>
					</header>
				</div>
				<div className="userBox">
					<a href="//m.juanpi.com/order" className="user-item-horizontal">
						<span>我的订单</span>
						<span className="iconfont icon-jiantou fr"></span>
						<span className="mine-label fr">全部订单</span>
					</a>
					<div className="userItem">
						<a href="//m.juanpi.com/order/index/t/1">
							<em className="iconfont icon-daifukuan"></em><span>待付款</span>					</a>
						<a href="//m.juanpi.com/order/index/t/13">
							<em className="iconfont icon-daichengtuan"></em><span>待成团</span>					</a>
						<a href="//m.juanpi.com/order/index/t/14">
							<em className="iconfont icon-daishouhuo"></em><span>待收货</span>					</a>
						<a href="//m.juanpi.com/refund/backlist">
							<em className="iconfont icon-cshy-rmb2"></em><span>退款/售后</span>
						</a>
					</div>
					<div className="userItems">
						<a href="//m.juanpi.com/myfavorite" className="user-item-horizontal">
							<span>我的收藏</span>
							<span className="iconfont icon-jiantou fr"></span>
						</a>
						<a href="https://tuan.juanpi.com/pintuan/my" className="user-item-horizontal">
							<span>我的拼团</span>
							<span className="iconfont icon-jiantou fr"></span>
						</a>
						<a href="https://m.juanpi.com/vipcard/index" className="user-item-horizontal">
							<span>VIP钻石卡</span>
							<span className="iconfont icon-jiantou fr"></span>
							<span className="mine-label fr">VIP限时回馈，直降70元</span>
						</a>
						<a href="//m.juanpi.com/coupon" className="user-item-horizontal no-bottom">
							<span>优惠券</span>
							<span className="iconfont icon-jiantou fr"></span>
						</a>
						
					</div>
					<div className="userItems">
						<a href="//m.juanpi.com/service/index" className="user-item-horizontal">
							<span>客服中心</span>
							<span className="iconfont icon-jiantou fr"></span>
						</a>
						<a href="//m.juanpi.com/about/juanpi" className="user-item-horizontal no-bottom">
							<span>关于卷皮</span>
							<span className="iconfont icon-jiantou fr"></span>
						</a>
					</div>
					<input type="hidden" id="isBoxShow" name="isBoxShow" value="0"/>
					<input type="hidden" id="fromLoginUrl" name="fromLoginUrl" value=""/>
				</div>
				<div id="foot">
					<div className="foot-nav">
						<a href="//m.juanpi.com">返回首页</a>
						<a href="javascript:void(0);" className="joa_load_app">客户端</a>
						<a href="//www.juanpi.com/" id="pcJuanpi">电脑版</a>
					</div>
					<div className="cut-line"></div>
					<div className="foot-copyright"></div>
					<h2>copyright © 武汉奇米网络科技有限公司</h2>
				</div>
			</div>
			
		)
	}
}



export default MineHeaderComponent