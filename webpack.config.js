
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, './'),
	entry: {
    	app: './app/main.js'
  	},
  	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: '[name].js'
	},
	resolve: {
    	extensions: ['.js', '.vue', '.json']
  	},
  	module: {
  		rules: [
  			{
		        test: /\.js$/,
		        loader: 'babel-loader',
		        exclude:/node_modules/, 
		        query:{
			       presets:['es2015','stage-0']
			    }
  			},
  			{
		        test:/\.scss$/,
		        exclude:/node_modules/,
		        loader:'style-loader!css-loader!sass-loader'
		    }
  		]
  	},
  	optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
  	plugins:[
      new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: path.resolve('./dist/index.html'),
	      inject: true,
	      title: 'test'
	  })
   ],
   devServer: {
   		host: 'localhost',
	    port: 3000, 
	    contentBase: path.resolve(__dirname,'./dist'), //可选，基本目录结构
	    compress: true //可选，压缩
   }
};