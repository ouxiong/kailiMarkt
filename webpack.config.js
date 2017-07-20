
//需要引入插件

var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

//重点    __dirname获取当前文件的绝对路径

//webpack打包配置信息
module.exports = {
	//入口文件   将入口文件引进来
	entry:"./src/app.js",
	//将打包的文件输出到指定位置
	output:{
		path:__dirname+"/build",
		filename:"app.js"
	},
	//配置热更新
	devServer:{
		contentBase:"./build",
		host:'localhost',
		port:1234,
		historyApiFallback:false
	},
	//配置indexhtml热更新
	plugins:[
	//压缩js文件必须引入webpack模块
		/*new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),*/
	   //让index。html也能打包过去，并且能主动的引上 对应的文件
		new HtmlWebpackPlugin({
			template:"./src/index.html",
			filename:'index.html'
		}),

		new ExtractTextPlugin({
			filename:'app.css',
			allChunks:true
		})
	],
	//配置编译css文we
	module:{
		loaders:[
		//css样式没抽之前的
//			{
//				test:/\.css$/,
//				loader:'style-loader!css-loader'
//			},
//			{
//				test:/\.scss$/,
//				loader:'style-loader!css-loader!sass-loader'
//			}
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					//需要使用什么的loader抽出
					fallback:"style-loader",
					use:[
						{
							loader:"css-loader",
							options:{
								minimize:true
							}
							
						}
					]
				})
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					//需要使用什么的loader抽出
					fallback:"style-loader",
					use:"css-loader!sass-loader"
				})
			},
			//配置编译的jsx语法
//			{
//				test:/\.js$/,
//				loader:"jsx-loader"
//			}
			//利用babel-loader进行编译jsx和es6
			{
				test:/\.js$/,
				loader:"babel-loader",
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}
