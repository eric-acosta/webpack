const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractTextPlugin = new ExtractTextPlugin({
    filename: 'css/styles.css'
})
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
      },
    module: {
    rules: [
      { 
        test: /\.scss$/, 
        use: extractTextPlugin.extract({
            use:['css-loader','sass-loader']
        }) 
    },
    {
        test: /\.html$/, 
        use:['html-loader']

    }
    ]
  },
  plugins: [
    extractTextPlugin,
    new HtmlWebpackPlugin({
        filename:"index.html",
        template: './src/index.html',
    })
  ]
}