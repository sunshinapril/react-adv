const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    mode:isDev ? 'development' : 'production',
    entry:{
        index:[path.resolve(__dirname,'../src/index.tsx')]
    },
    output:{
        filename:'[name].[hash:8].js',
        chunkFilename:'[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            modules:{
                                //创建css module防止css全局污染
                                localIndentName:'[local][name]-[hash:base64:4]' 
                            }
                        }
                    },{
                        loader:'postcss-loader',
                        options:{
                            plugins:[require('autoprefixer')]
                        }
                    }                
                ]
            },
            {
                test:/\.less$/,
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },{
                        loader:'less-loader',
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:[require('autoprefixer')]
                        }
                    }                
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1024, //小于1m时使用url-loader
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'img/[name].[hash:8].[ext]' //创建一个img的文件夹并将图片存入
                            }
                        }
                    }
                }
            },
            {
                test:/\.(mp4|mp3|webm|ogg|wav)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1024,
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'media/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }
            },
            {
                test:/\.tsx?$/,
                exclude: /(node_modules)/,
                use:[
                    {   
                        loader:'babel-loader?cacheDirectory=true',
                        options:{
                            presets:['@babel/preset-env','@babel/preset-react'],
                            plugins:['@babel/plugin-syntax-dynamic-import',['@babel/plugin-transform-runtime']]
                        },
                    },         
                    'ts-loader'
                ]
            },
            {
                enforce:"pre",
                test:/\.js$/,
                loader:"source-map-loader"
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: path.join(__dirname,'../src'),
                use:[
                    {   
                        loader:'babel-loader?cacheDirectory=true',
                        options:{
                            presets:['@babel/preset-env','@babel/preset-react'],
                            plugins:['@babel/plugin-syntax-dynamic-import',['@babel/plugin-transform-runtime']]
                        },
                    }
                ]
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash:8].css',
            chunkFilename:'[id].[contenthash:8].css'
        }),
        new Webpack.DefinePlugin({  //创建一个在编译时可以配置的全局变量
            'process.env':{
                NODE_ENV:isDev ? '"development"':'"production"'
            }
        }),
        new TsconfigPathsPlugin()
    ],
    resolve:{
        modules:['node_modules'],
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
        alias:{
            '@':path.join(__dirname,'../src')
        }
    },
    devtool:'source-map',
    devServer: {
        contentBase: path.join(__dirname,'../dist'),
        hot:true,
        compress:true,
        open:true,
        historyApiFallback:true,
        overlay:{
            error:true
        },
        host:'localhost',
        port: '8000',
        proxy:{
            '/api/server':{
                target:'http:localhost:3010',
                pathRewrite:{
                    '^/api/server':''
                },
                changeOrigin:true,
                //secure:false
            }
        }
    }
}








