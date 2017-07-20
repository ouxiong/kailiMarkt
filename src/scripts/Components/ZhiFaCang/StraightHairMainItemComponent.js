class StraightHairMainItemComponent extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            
               

                <div className="new-goods-item">
                        <img src={this.props.zhifa.pgpicurl} alt=""/>
                        <p>
                            <span className="price-new"><i>¥</i>{this.props.zhifa.tuan_price}</span>
                            <span className="pin">拼</span>
                            <span className="gray-text">{this.props.zhifa.oprice}</span>
                        </p>
                        <p>
                            <span className="zhifa">直发</span>
                            {this.props.zhifa.title}</p>
                </div>
            
        )
    }
}


export default StraightHairMainItemComponent




//  <div className="new-goods-item">
//                     <img src="./img/icon_2.jpg" alt=""/>
//                     <p>
//                         <span className="price-new"><i>¥</i>19.9</span>
//                         <span className="pin">拼</span>
//                         <span className="gray-text">¥199</span>
//                     </p>
//                     <p>
//                         <span className="zhifa">直发</span>
//                         百搭高腰牛仔半身裙</p>
//                 </div>