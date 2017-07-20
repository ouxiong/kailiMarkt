class StraightHairHeaderComponent extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="straightHairHeader clearfix">
                <span className="_header">生活仓库</span>
                <a href="#" className="straightHairHeader_fl">
                    <span className="iconfont icon-sousuofenlei fenlei"></span>
                </a>
            </div>
        )
    }
}


export default StraightHairHeaderComponent