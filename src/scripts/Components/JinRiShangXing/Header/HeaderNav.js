

import HeaderNavItem from './HeaderNavItem'
class HeaderNav extends React.Component{
    constructor(props,context){
		super(props,context)
		
		this.state={
			navs:null,
			HeaderNavFixed:false
		}
		
		this.mySwiper=null;
    }
    
    componentWillMount(){
		var that = this;
		$.ajax({
			url:"./json/navs.json",
			dataType:"json",
			success:function(result){
              
				that.setState({
					navs:result
					
				})
			}
		})
	}
	
	componentDidMount(){
         
		this.mySwiper=new Swiper(".nav",{
          
			slidesPerView: 'auto',
		    spaceBetween: 30
		})
		window.addEventListener('scroll', this.handleScroll.bind(this));  
	}
	
	componentDidUpdate(){
		var that = this
		setTimeout(function(){
			that.mySwiper.update()
		},0)
	}
	handleScroll(e){
		// console.log(e.target.scrollingElement.scrollTop)
		let myscrollTop =e.target.scrollingElement.scrollTop
		if(myscrollTop>=100){
			this.setState({
				HeaderNavFixed:true
			})
		}else{
			this.setState({
				HeaderNavFixed:false
			
			})
		}
	}
	putNavs(){
		var arr = []
		if(this.state.navs){
			this.state.navs.forEach((_nav,i)=>{
				arr.push(<HeaderNavItem key={i} _nav={_nav}/>)
			})
		}
		
		return arr;
		// <div className="swiper-container nav">
	}
	render (){
		return(
			<div className={this.state.HeaderNavFixed?'swiper-container navFixed':'swiper-container nav'}>
                <div className="swiper-wrapper ">
                   {this.putNavs()}
                </div>
            </div>
			
		)
	}
}



export default HeaderNav