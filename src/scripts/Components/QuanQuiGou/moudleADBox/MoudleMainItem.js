
import MoudleMainItem_1 from "./MoudleMainItem_1"

class MoudleMainItem extends React.Component{
	constructor(props,context){
		super(props,context)

		this.state={
			global:null,
			num:1
		}
	}

	componentWillMount(){
		var that=this
		$.ajax({
			url:'https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=1&rows=10&callback=gsort_callback',
			dataType:"jsonp",
			success:function(result){
				console.log(result)
				that.setState({
					global:result.list
				})
			}
		})
	}

	putGlobal(){
		var arr=[];
		
		if(this.state.global){
			this.state.global.forEach((global,i)=>{
				if(global.shop_cover){
					arr.push(<div className="brand-home-group">
						<a href="#" className="banner">
							<div className="top-jiaobiao">满60元<br/>减15元</div>                    
							<img src={global.shop_cover} alt="祥盟食品719热卖"/>
						</a>
						<div className="yinliu-box">
							<div className="yinliu-list">
								<MoudleMainItem_1 shop_goods={global.shop_goods}/>
								
							</div>
						</div>
					</div>)
				}
				
			})
		}
		
		return arr;
	}
	// 上拉加载
	 componentDidMount(){
		window.addEventListener('scroll', this.handleScroll.bind(this));   
	 } 
	handleScroll(e){
        // 滚动条的高度
        let myscrollTop =e.target.scrollingElement.scrollTop
        // 页面的高度
        let pageScrollHeight = e.target.scrollingElement.scrollHeight
        // 屏幕的高度
        let screenHeight =e.srcElement.scrollingElement.clientHeight
        
        if(myscrollTop>=pageScrollHeight-screenHeight){
       
            this.getMoreData()
        }
    }
    getMoreData(){
        var that=this
        
         this.state.num=this.state.num+1
         $.ajax({
            url:'https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page='+this.state.num+'&rows=10&callback=gsort_callback',
            dataType:'jsonp',
            success:function(result){

                // // console.log(result.list)
                // that.state.info.push(result.list)
                // console.log(that.state.info)
                result.list.forEach((item,i)=>{
                    that.state.global.push(item)
                    // console.log(that.state.info)
                })
                // 重新执行render
                that.setState({
                    global: that.state.global,
                    num: that.state.num
                })
                
                
            }
        })
    }


	render(){
		return(
			<div>
				{this.putGlobal()}
			</div>
		)
	}
	

	
}



export default MoudleMainItem