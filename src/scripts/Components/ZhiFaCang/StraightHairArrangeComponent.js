class StraightHairArrangeComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            StraightHairArrangefixed:false
        }
    }


    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));  
    }
    handleScroll(e){
		// console.log(e.target.scrollingElement.scrollTop)
		let myscrollTop =e.target.scrollingElement.scrollTop
		if(myscrollTop>=44){
			this.setState({
				StraightHairArrangefixed:true
			})
		}else{
			this.setState({
				StraightHairArrangefixed:false
			
			})
		}
	}
    render(){
        return(
            <div className={this.state.StraightHairArrangefixed?'StraightHairArrangefixed':'StraightHairArrange'}>
                <div className="_StraightHairArrange">
                    <ul>
                        <li className="all">默认</li>
                        <li className="price">价格
                            <img src="./img/zhifa_nav.png" alt=""/>
                        </li>
                        <li className="sales">销量</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default StraightHairArrangeComponent