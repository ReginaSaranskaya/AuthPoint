const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'bundle.css',
  }),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  plugins,
  entry: './src/index.tsx',
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        type: "asset/resource", // Обработка шрифтов как статических ресурсов
        generator: {
          filename:  'assets/fonts/[name][ext]', // Путь шрифтов в папке dist/fonts
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset', // автоматический выбор 'asset/resource' или 'asset/inline'
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // Картинки до 8 КБ будут инлайн
          },
        },
        generator: {
          filename: 'images/[name][hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg', '.svg'],
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
};
