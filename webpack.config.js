let path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');

let publicDir = path.resolve('../../public');
let currentFolder = __dirname.split(path.sep).pop();
let outputDir = path.join(__dirname, '../', '../', 'public', currentFolder, 'assets', 'js');


const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, 'src/CSS/ANT.less'), 'utf8'));


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
                        "transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread", ["import", { libraryName: "antd", style: true }]
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
                test: /\.(less|LESS)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader",
                    options: {
                        modifyVars: themeVariables
                    }
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