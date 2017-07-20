




class FooterComponent extends React.Component{
    constructor(props,context){
    super(props,context)
    this.state={
      scrollshow:false
    }
    }
    getActiveClass(type){
		var active=this.props.active==undefined?'main':this.props.active
		return active==type?'footBox-item active':"footBox-item"
    }

    
  componentDidMount(){
		window.addEventListener('scroll', this.handleScroll.bind(this));   
  } 
  
  handleScroll(e){
      // console.log(e.target.scrollingElement.scrollTop)
      let myscrollTop =e.target.scrollingElement.scrollTop
      if(myscrollTop>=100){
          this.setState({
             scrollshow:true
          })
      }else{
          this.setState({
             scrollshow:false
           
          })
    }
  }

// 回到顶部
  changeScroll(){
    window.scrollTo(0,0)
  }
    render (){
      return(
        <div className="footerBox">
          <a  className={this.getActiveClass('main')} href="#/main">
            <i className="iconfont icon-shouye "></i>
            <span>今日上新</span>
          </a>
          <a  className={this.getActiveClass('zhifa')} href="#/zhifa">
            <i className="iconfont icon-baoguofahuo "></i>
            <span>直发仓</span>
          </a>

          <a  className={this.getActiveClass('quanqui')} href="#/quanqui">
            <i className="iconfont icon-quanqiugou "></i>
            <span>全球购</span>
          </a>

          <a className={this.getActiveClass('gouwu')} href="#/gouwu">
            <i className="iconfont icon-gouwuche "></i>
            <span>购物车</span>
          </a>

          <a  className={this.getActiveClass('mine')} href="#/mine">
            <i className="iconfont icon-wode "></i>
            <span>我的凯丽</span>
          </a>
        
        <div className={this.state. scrollshow?'go-to-top':'hidden'}  onClick={this.changeScroll} >
            <span>
              <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/back-top.png?ts=390cfa98cd666aa7_1500379158-1&sv=a8351a1e" alt=""/>
            </span>
        </div>
      </div>
        
        )
      }
    }



export default FooterComponent
