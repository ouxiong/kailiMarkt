
import BannerItem from './BannerItem'

class BannerComponent extends React.Component{
    constructor(props,context){
        super(props,context)

        this.state={
            banner:null
        }
        this.mySwiper=null
    }

    componentWillMount(){
       
        var that = this;
		$.ajax({
			url:"./json/banner.json",
			dataType:"json",
			success:function(result){
				that.setState({
					banner:result
				})
			}
		})
    }



    componentDidMount(){
        this.mySwiper = new Swiper(".banner",{
            pagination:'.swiper-pagination',
			autoplay : 5000,
			loop : true,
			autoplayDisableOnInteraction : false,
        })
    }

    componentDidUpdate(){
        var that = this
		setTimeout(function(){
			that.mySwiper.update()
		},0)
    }


    putBanner(){
        var arr=[];
       if(this.state.banner){
            this.state.banner.forEach((_banner,i)=>{
                arr.push( <BannerItem key={i} _banner={_banner}/>)
            })
       }
        

        return arr;
    }
	render (){
		return(
			<div className="swiper-container banner">
			    <div className="swiper-wrapper">
                    {this.putBanner()}
			    </div>
			    <div className="swiper-pagination swiper-pagination-bullets"></div>
			</div>
			
		)
	}
}



export default BannerComponent