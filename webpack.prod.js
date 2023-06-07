const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  /* Tambahkan penerapan plugin di bawah di berkas ini */
 plugins:[
  new WorkboxWebpackPlugin.GenerateSW({
    swDest: './sw.bundle.js',
    runtimeCaching: [
      {
        urlPattern: ({url}) => url.pathname.startsWith('/images'),
        handler: 'NetworkFirst',
        options:{
          cacheName: 'Images-API',
        },
      },
      {
        urlPattern: ({url})=> url.origin == 'https://restaurant-api.dicoding.dev' && !url.pathname.startsWith('/images'),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'RestaurantCache',
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
    ],
  }),
 ],
});
