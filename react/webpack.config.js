const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    parallel: true,
    cache: true,
  },
}