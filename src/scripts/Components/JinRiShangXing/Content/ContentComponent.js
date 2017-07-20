

import ContentItem from './ContentItem'

class ContentComponent extends React.Component{
     constructor(props,context){
        super(props,context)

        this.state={
            info:null,
            num:1
        }
    
     }
    componentWillMount(){
        var that =this;
        $.ajax({
            url:'https://shop.juanpi.com/zxg?key=zuixinzhekou&type=1&zhouyi_ids=p8_c3_l1_18_51_5&machining=gsortzxg&page=1&rows=10&dtype=JSONP&cm=1&cm_channel=1&callback=gsort_callback',
            dataType:'jsonp',
            success:function(result){
                // console.log(result);
                that.setState({
                    info:result.list
                })
            }
        })
    }

    putGoods(){
        var arr=[];
        // console.log(this.state.info)
        if(this.state.info){
            this.state.info.forEach((good,i)=>{
                arr.push( <ContentItem key={i} good={good}/>)
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
        // console.log(myscrollTop,pageScrollHeight,screenHeight)
		// 页面高度
		// console.log(e.target.scrollingElement.scrollHeight)
		// 屏幕的高度
        // console.log(e.srcElement.scrollingElement.clientHeight)
        // myscrollTop>=pageScrollHeight-screenHeight
        if(myscrollTop>=pageScrollHeight-screenHeight){
        //    alert(1212121)
            this.getMoreData()
        }
    }
    getMoreData(){
        var that=this
        
         this.state.num=this.state.num+1
         $.ajax({
            url:'https://shop.juanpi.com/zxg?key=zuixinzhekou&type=1&zhouyi_ids=p8_c3_l1_18_51_5&machining=gsortzxg&page='+ this.state.num+'&rows=10&dtype=JSONP&cm=1&cm_channel=1&callback=gsort_callback',
            dataType:'jsonp',
            success:function(result){

                // // console.log(result.list)
                // that.state.info.push(result.list)
                // console.log(that.state.info)
                result.list.forEach((item,i)=>{
                    that.state.info.push(item)
                    // console.log(that.state.info)
                })
                // 重新执行render
                that.setState({
                    info:that.state.info,
                    num: that.state.num
                })
                
                
            }
        })
    }
	render (){
		return(
			<div className="main-box">
               {this.putGoods()}
			
					
			</div>
			
		)
	}
}



export default ContentComponent