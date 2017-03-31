//一个常见的Webpack配置文件
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, //解析 js \ jsx 文件 - 模块化加载js jsx
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
      }, //模块化加载图片文件
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      } //模块化加载 css
    ]
  }
};
