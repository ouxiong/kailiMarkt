


class ContentItem extends React.Component{
    constructor(props,context){
        super(props,context)
         this.state={
            logo:'./img/icon_1.png'
        }
    }
    
	render (){
        // const{}=解构赋值
		return(
			
			
            <div className="main">
                <div className="main-classify">
                    <a href="#" className="main-classify-l">
                        <div className="main-header">
                            <div className="main-header-logo">
                                <img src={this.props.good.logo_url||this.state.logo} alt=""/>
                            </div>
                            <div className="main-header-merchant">
                                <p>{this.props.good.title}</p>
                                <p>{this.props.good.coupon_tips}</p>
                            </div>
                            <div className="main-header-groupon">
                               {this.props.good.mkt_info}
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="new-goods-item">
                                <img src={this.props.good.sub_data[0].pic} alt=""/>
                                <p>
                                    <span>{this.props.good.sub_data[0].cp}</span>
                                    <span className="gray-text">{this.props.good.sub_data[0].op}</span>
                                </p>
                                <p>{this.props.good.sub_data[0].title}</p>
                            </div>
                            <div className="new-goods-item">
                                <img src={this.props.good.sub_data[1].pic} alt=""/>
                                <p>
                                    <span>{this.props.good.sub_data[1].cp}</span>
                                    <span className="gray-text">{this.props.good.sub_data[1].op}</span>
                                </p>
                                <p>{this.props.good.sub_data[1].title}</p>
                            </div>
                        </div>
                    </a>
                    
                </div>
                
            </div>	
			
			
		)
	}
}



export default ContentItem