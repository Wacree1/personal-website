const webpack = require('webpack');
const config = require('./webpack.config.js');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString({
      colors: true,
      errors: true,
      errorDetails: true
    }));
    process.exit(1);
  }
  console.log(stats.toString({
    colors: true,
    chunks: false,
    modules: false
  }));
  console.log('Build completed successfully!');
});
