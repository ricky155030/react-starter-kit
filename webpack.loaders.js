module.exports = [
  {
    test: /\.js?$/,
    exclude: /(node_modules|public)/,
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
