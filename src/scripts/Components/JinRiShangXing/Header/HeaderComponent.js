

import HSearch from './HSearch'
import HeaderNav from './HeaderNav'


class HeaderComponent extends React.Component{
	constructor(props,context){
    super(props,context)
    this.state={
      
    }
    }

	
	render (){
		return(
			<div>
                <a href="###" className="hearder-img">
				    <img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115" alt=""/>
                </a>
                <HSearch/>
                <HeaderNav/>
			</div>
			
		)
	}
}



export default HeaderComponent