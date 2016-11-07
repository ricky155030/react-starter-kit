module.exports = [
  { 
    test: /\.jsx?$/, 
    exclude: /(node_modules|bower_components|public)/, 
    loader: 'babel', 
    query: { presets: ['es2015', 'react', 'babel-preset-stage-0'] }
  },
  { 
    test: /\.json$/, 
    loader: 'json' 
  },
  { 
    test: /\.css$/, 
    loader: 'style!css' 
  }
];
