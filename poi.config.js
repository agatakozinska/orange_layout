let webpack = require('webpack');
let variables = require('./content');

module.exports = {
  html: {
    title: 'Orange layout',
    description: 'Testing page',
    template: '!!ejs-compiled-loader!index.ejs',
    variables,
  },
  webpack(config) {
    config.plugins.push(new webpack.ProvidePlugin({

    }));
    // config.output.publicPath = './'

    // don't add sourcemaps in production build
    if (process.env.NODE_ENV === 'production') {
      delete config.devtool;
    }

    return config // <-- Important, must return it
  },
}