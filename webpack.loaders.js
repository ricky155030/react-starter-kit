module.exports = {
  rules: [
    {
      test: /\.js?$/,
      use: [
        'babel-loader'
      ],
      exclude: /(node_modules|public)/,
    },
    { 
      test: /\.css$/, 
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
