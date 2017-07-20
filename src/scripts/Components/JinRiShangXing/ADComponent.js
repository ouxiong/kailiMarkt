
/* 
<a href="###">
                        <img src={this.state.imgUrl3.pic} alt=""/>
                    </a> */

class ADComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            imgUrl:null
        }
    }
    componentWillMount(){
      var temp =  JSON.parse(localStorage.pageDate)
    // console.log(temp)
      this.state={
          url:temp,
          imgUrl:temp.module_ads.multi_block[1].data[0].child,
          imgUrl2:temp.module_ads.multi_block[2].data[0].child[0],
          imgUrl3:temp.module_ads.multi_block[3].data[0].child[0],
          imgUrl4:temp.module_ads.multi_block[4].data[0].child[0],
          imgUrl5:temp.module_ads.multi_block[5].data[0].child[0]


      }
    }
    
	render (){
		return(
			<div className="ad-box">
                <div className="ad-one">
                    <div className="ad-one-left">
                        <a href="###">
                            <img src={this.state.imgUrl[0].pic} alt=""/>
                        </a>
                        
                    </div>
                    <div className="ad-one-right">
                        <a href="###">
                            <img src={this.state.imgUrl[1].pic} alt=""/>
                        </a>
                        <a href="###">
                            <img src={this.state.imgUrl[2].pic} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="ad-two">
                    <a href="###">
                        <img src={this.state.imgUrl2.pic} alt=""/>
                    </a>
                    
                    <div>
                        <img src={this.state.imgUrl3.pic} alt=""/>
                    </div>
                    <div className="ad-two-box">
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[4].data[0].child[0].pic}  alt=""/>
                            
                        </a>
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[4].data[0].child[1].pic} alt=""/>
                        </a>

                    </div>
                    <div className="ad-two-box">
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[5].data[0].child[0].pic}  alt=""/>
                            
                        </a>
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[5].data[0].child[1].pic} alt=""/>
                        </a>

                    </div>
                     <div>
                        <img  src={this.state.url.module_ads.multi_block[6].data[0].child[0].pic} alt=""/>
                    </div>
                     <div>
                        <img  src={this.state.url.module_ads.multi_block[7].data[0].child[0].pic} alt=""/>
                    </div>
                    <div className="ad-two-box">
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[8].data[0].child[0].pic}  alt=""/>
                            
                        </a>
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[8].data[0].child[1].pic} alt=""/>
                        </a>

                    </div>
                    <div className="ad-two-box">
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[9].data[0].child[0].pic}  alt=""/>
                            
                        </a>
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[9].data[0].child[1].pic} alt=""/>
                        </a>

                    </div>
                    <div className="ad-two-box">
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[10].data[0].child[0].pic}  alt=""/>
                            
                        </a>
                        <a href="###">
                            <img src={this.state.url.module_ads.multi_block[10].data[0].child[1].pic} alt=""/>
                        </a>
                         <a href="###">
                            <img src={this.state.url.module_ads.multi_block[10].data[0].child[2].pic} alt=""/>
                        </a>
                         <a href="###">
                            <img src={this.state.url.module_ads.multi_block[10].data[0].child[3].pic} alt=""/>
                        </a>

                    </div>
                    <div>
                        <img  src={this.state.url.module_ads.multi_block[11].data[0].child[0].pic} alt=""/>
                    </div>
                </div>
			</div>
			
		)
	}
}



export default ADComponent