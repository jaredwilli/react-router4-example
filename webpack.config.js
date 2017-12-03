const path = require('path');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index',
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
	devServer: {
		publicPath: path.join('/build/')
    },
    externals: {
		react: 'react',
		'react-dom': 'react-dom'
	}
};
