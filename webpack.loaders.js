var path = require('path')

module.exports = {
  rules: [
    {
      test: /\.js?$/,
      use: [
        'babel-loader'
      ],
      include: path.resolve(__dirname, 'app/js')
    },
    { 
      test: /\.css$/, 
      use: [
        'style-loader',
        'css-loader'
      ],
      include: path.resolve(__dirname, 'app/css')
    }
  ]
}
