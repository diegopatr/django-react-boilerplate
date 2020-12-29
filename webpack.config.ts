import path from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    main: './web/src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './web/dist'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/static/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './web/dist'),
    compress: true,
    port: 4000,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      template: './web/src/index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './web/src/**/*.tsx',
      },
    }),
  ],
};


export default config;
