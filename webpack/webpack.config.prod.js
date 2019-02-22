const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


const common_config = {
    mode: 'production' ,
    entry: [path.join(__dirname,"../src/client/index.js")],
    performance: {
        hints: false
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname,"../src"),
                exclude: /node_modules/,
            },
        ],

    },
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    },
    plugins: [

        new HtmlWebpackPlugin({

            title: '',
            template: path.join(__dirname, '../src/assets/index.html'), // 模板文件
            inject: 'body',
            initialData: 'window.__INITIAL_STATE__ = <%- __state__ %>',
            hash: false, // 为静态资源生成hash值
            minify: { // 压缩HTML文件
                removeComments: false, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
            },
        }),
    ],
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: false,
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../dist'),
        port:3000,

    }

};




module.exports = common_config;