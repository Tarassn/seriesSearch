const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        index: './src/index.js',
        seriesPage: './src/seriesPage.js',
        selectedSeries: './src/selectedSeries.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(pug|jade)$/,
                use: ["pug-loader"]
            },
            {
                test: /\.(png|jpe?g)/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./img/[name].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.pug",
            title: 'index',
            myPageHeader: 'index',
            chunks:['index'],
        }),
        new HtmlWebPackPlugin({
            template: "./src/seriesPage.pug",
            filename: "./seriesPage.html",
            title: 'seriesPage',
            myPageHeader: 'seriesPage',
            chunks:['seriesPage']
        }),
        new HtmlWebPackPlugin({
            template: "./src/selectedSeries.pug",
            title:'selectedSeries',
            filename: "./selectedSeries.html",
            myPageHeader: 'selectedSeries',
            chunks:['selectedSeries']
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};