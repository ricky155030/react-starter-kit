module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: "babel"
  },
  { 
    test: /\.json$/, 
    loader: 'json' 
  },
  { 
    test: /\.css$/, 
    loader: 'style!css' 
  }
]
