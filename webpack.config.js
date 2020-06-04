const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var mixitup = require('mixitup');

module.exports = {

  // entry files to be bundled
  entry: {
    bundle: "./src/js/module-bundler.js",
  },

  // == output files name and path
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'docs/js'),
    publicPath: "docs/js"
  },
  
  // == local dev server
  devServer: {
      //devserver will look 
      contentBase: path.resolve(__dirname, 'docs'),
      compress: true,
      publicPath: "docs",
      writeToDisk: true
  }, 

  // == modules, rules, and loaders
  module: {

    rules: [

      // =================this will move all image files from src/img to dist/img========================
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              path: path.resolve(__dirname, 'docs/img'),
              outputPath: "../img/",
              publicPath: "../img/",
            }
          },
        ],
      },
      // ===================================================================================================
   
      // =================== sass loaders, these loaders will work together whenever they finds sass files such as bootstrap.scss or mystyle.scss, they work step by step and throw the finale raw css code in the dis/css folder =====
      {
        test: /\.scss$/i,
        use: [

          {
          loader: MiniCssExtractPlugin.loader // == 4
          },

          {
          loader: "css-loader" // == 3
          },

          {
            loader: "postcss-loader", // = 2
            options: { 
              plugins: function() {
                return [
                  require("autoprefixer")
                ]
              }
            }
          },

          {
          loader: "sass-loader" // == 1 ()
          }    

        ]
      },
      // ==================================================================================================================

      // =========================== this will move all font files from src/fonts to dist/fonts ============================
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              path: path.resolve(__dirname, 'docs/fonts'),
              outputPath: "../fonts/",
              publicPath: "../fonts/",
            }
          }
        ]
      },
      // ===================================================================================================

    ],
  },
  

  plugins: [
    // ======== this will extract all css codes from the app.js file, create a new css file with that css code ==========
    new MiniCssExtractPlugin({ 
        filename: "../css/[name].css" 
    }),
  // =====================================================================================================================
  
    // ======== for jquery to work =======================================================================================
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.jQuery': "jquery",
    })
    // ====================================================================================================================
  ]
  
};
