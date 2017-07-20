
import StraightHairMainItemComponent from "./StraightHairMainItemComponent"


class StraightHairMainComponent extends React.Component{
    constructor(props,context){
        super(props,context)

        this.state={
            ZhiFaCangMain:null,
            num:1
		}
    }

    

	componentWillMount(){
		var that=this
		$.ajax({
			url:'https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22stock%22%3A%222%22%2C%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%223%22%5D%2C%22source_type%22%3A%5B%221%22%5D%2C%22fcate%22%3A%22490%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_18_51_5&machining=danpin&page=1&rows=10&dtype=JSONP&callback=gsort_callback',
			dataType:"jsonp",
			success:function(result){
				console.log(result)
				that.setState({
					ZhiFaCangMain:result.list
				})
			}
		})
    }
    
    putZhiFaCang(){
		var arr=[];
		
		if(this.state.ZhiFaCangMain){
			this.state.ZhiFaCangMain.forEach((zhifa,i)=>{
				arr.push(<StraightHairMainItemComponent key={i} zhifa={zhifa}/>)
			})
		}
		
		return arr;
    }
    

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
            url:'https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22stock%22%3A%222%22%2C%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%223%22%5D%2C%22source_type%22%3A%5B%221%22%5D%2C%22fcate%22%3A%22490%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_18_51_5&machining=danpin&page='+this.state.num+'&rows=10&dtype=JSONP&callback=gsort_callback',
            dataType:'jsonp',
            success:function(result){

                // // console.log(result.list)
                // that.state.info.push(result.list)
                // console.log(that.state.info)
                result.list.forEach((item,i)=>{
                    that.state.ZhiFaCangMain.push(item)
                    // console.log(that.state.info)
                })
                // 重新执行render
                that.setState({
                    ZhiFaCangMain: that.state.ZhiFaCangMain,
                    num: that.state.num
                })
                
                
            }
        })
    }


    render(){
        return(
            <div className="StraightHairMain">
                <div className="main-content">
                     {this.putZhiFaCang()}
                </div>
            </div>
        )
    }

    
}


export default StraightHairMainComponent