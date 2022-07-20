const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const CopyFilePlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        hint: './src/js/hint.js',
        allclear: './src/js/allclear.js',
        haze1: './src/js/stages/haze1.js',
        haze2: './src/js/stages/haze2.js',
        haze3: './src/js/stages/haze3.js',
        haze4_1: './src/js/stages/haze4_1.js',
        haze4_2: './src/js/stages/haze4_2.js',
        haze4_3: './src/js/stages/haze4_3.js',
        haze5: './src/js/stages/haze5.js',
        haze6: './src/js/stages/haze6.js',
        haze7: './src/js/stages/haze7.js',
        haze8: './src/js/stages/haze8.js',
        haze9_1: './src/js/stages/haze9_1.js',
        haze9_2: './src/js/stages/haze9_2.js',
        haze10: './src/js/stages/haze10.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist', "js"),
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial'
        }
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyFilePlugin({
            patterns: [
                {
                    context: "src/pages",
                    from: "**/*.html",
                    to: path.resolve(__dirname, "dist")
                },
                {
                    context: "src/img",
                    from: "**/*",
                    to: path.resolve(__dirname, "dist/img")
                },
            ],
        }),
        new WriteFilePlugin()
    ],
};