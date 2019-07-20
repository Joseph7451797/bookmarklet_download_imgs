const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WDS_PORT = '8080'

const isProd = process.env.NODE_ENV === 'build'
const isHost = process.env.NODE_ENV === 'host'

const assethash = Math.random().toString(36).slice(2, 8)
const builtDirname = '/dist/'
const publicPath = isProd ? builtDirname : isHost ? `http://${process.argv[6]}:${WDS_PORT}/` : `http://localhost:${WDS_PORT}/`
const serverPathofMainjs = isProd ? `https://rawgit.com/Joseph7451797/bookmarklet_download_imgs/dev/dist/main.js?${assethash}` : '/main.js'

module.exports = function() {

    const entry = {
        getCode: [
            './src/getCode.js'
        ],
        main: [
            './src/main.js'
        ]
    }

    const output = {
        publicPath: publicPath,
        path: __dirname + builtDirname,
        filename: '[name].js'
    }

    const module = {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !isProd,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [ // all plugin info can be found on postcss-loader github page
                                    require('postcss-css-reset'),
                                    require('autoprefixer')
                                ]
                            },
                            sourceMap: !isProd
                        }
                    },
                    {
                        // Because I still want to write scss, use sass-loader for scss file.
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProd
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

    const plugins = [
        new webpack.DefinePlugin({
            // pass variable to all entry source
            isProd: isProd,
            serverPathofMainjs: JSON.stringify(serverPathofMainjs)
        }),
        new HtmlWebpackPlugin({
            template: './src/template.ejs',
            filename: isProd ? '../index.html' : 'index.html', // change to '../index.html' for different output path
            chunks: ['getCode'], // add chunk style.js(scss file included)
            minify: { // minify rule
                collapseWhitespace: isProd,
                minifyCSS: {
                    level: {
                        1: {
                            specialComments: isProd ? 0 : 'all' // remove special comments like /*! comments...
                        }
                    }
                },
                removeAttributeQuotes: isProd
            }
        })
    ]

    if( isProd ){
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                },
                comments: false
            })
        )
    }

    return {
        devtool: isProd ? false : 'source-map',
        entry: entry,
        output: output,
        module: module,
        plugins: plugins,
        resolve: {
            extensions: ['.js']
        },
        devServer: {
            port: WDS_PORT,
            contentBase: __dirname,
            stats: 'minimal'
        }
    }
}