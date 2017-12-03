const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname + '/src/index'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
                loader: 'babel-loader',
				test: /.jsx?$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'We like examples that just work...'
        })
    ],
	devServer: {
		publicPath: path.join('/build/')
    },
    externals: {
		react: 'react',
		'react-dom': 'react-dom'
	}
};
