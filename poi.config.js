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
    //to run build
    // config.output.publicPath = './' 


    return config // <-- Important, must return it
  },
}