let path = require('path');

let publicDir = path.resolve('../../public');
let currentFolder = __dirname.split(path.sep).pop();
let outputDir = publicDir + path.sep + currentFolder + path.sep + 'assets' + path.sep + 'js';

module.exports = {
    entry: './src/index.js',
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    watch: true,
    
    devServer : {
        contentBase : './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'es2015', 'stage-1', 'react'],

                    plugins: [
                        "transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread", ["import", { libraryName: "antd", style: "css" }]
                    ],

                },
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
              test: /\.svg$/,
              loader: 'babel-loader!svg-react-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}  
                }]
            }
        ]
    },


}