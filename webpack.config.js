const webpack = require('webpack');;
const glob = require('glob');
const path = require('path');
const config = {
    entry: __dirname + '/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: "/dist"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.(scss|sass|css)$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d))
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
        ]
    }
};
module.exports = config;