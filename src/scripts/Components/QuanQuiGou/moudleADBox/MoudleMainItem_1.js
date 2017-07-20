


class MoudleMainItem_1 extends React.Component{
	constructor(props,context){
		super(props,context)

		this.state={
			globalItem:null
		}
	}
	componentWillMount(){
		var that=this
		$.ajax({
			url:'https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=1&rows=10&callback=gsort_callback',
			dataType:"jsonp",
			success:function(result){
				// console.log(result)
				that.setState({
					globalItem:result.list
				})
			}
		})
	}
	putGlobalItem(){
		var arr=[];
		
		if(this.props.shop_goods){
			this.props.shop_goods.forEach((shop_goods,i)=>{
				// console.log(shop_goods)
				arr.push(<div className="yinliu-good">
							<a href={shop_goods.target_url} className="good-pic">                        
								<img src={shop_goods.pic_url} alt={shop_goods.title}/>
							</a>
							<a href="//m.juanpi.com/shop/41779582" className="good-detail">
								<div className="good-price">
									<span className="price-new">¥{shop_goods.cprice}</span><span className="price-del">¥{shop_goods.oprice}</span>
								</div>
								<div className="good-name">{shop_goods.title}</div>
							</a>
						</div>)
			})
		}
		
		return arr;
	}


	render(){
		// console.log(this.props.shop_goods)
		return(
			<div>
				{this.putGlobalItem()}
				<div className="yinliu-good go-more">
					<a href="//m.juanpi.com/brand/1628591?shop_id=2126527" className="good-pic">
						<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/this_global_more.png?20160825" alt="查看更多"/>
					</a>
				</div>
			</div>
		)
	}
	

	
}



export default MoudleMainItem_1