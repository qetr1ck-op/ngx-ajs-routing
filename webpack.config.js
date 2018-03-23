const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {AngularCompilerPlugin} = require('@ngtools/webpack')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'build.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.less', '.html']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [

    new AngularCompilerPlugin({
      tsConfigPath: 'src/tsconfig.app.json',
      mainPath: 'main.ts',
      // skipCodeGeneration: true,
      // sourceMap: true
    }),

    new HtmlPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    port: 3000,
    inline: true,
    contentBase: './build',
    historyApiFallback: true
  }
}
