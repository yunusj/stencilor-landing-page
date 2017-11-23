let path = require('path');

let publicDir = path.resolve('../../public');
let currentFolder = __dirname.split(path.sep).pop();
let outputDir = path.join(__dirname, '../', '../', 'public', currentFolder, 'assets', 'js');

var webpack = require('webpack');

var isDevelopment = process.argv.indexOf('--development') !== -1;

var entryPath = path.join(__dirname, 'src/APP.js');
console.log('outputDir', outputDir );
console.log('entryPath', entryPath);
console.log('isDevelopment', isDevelopment);
console.log('node_modules path', path.join(__dirname, 'node_modules'));
console.log('__dirname', __dirname);

var entry = isDevelopment ? [
  'webpack-hot-middleware/client?reload=true',
  'react-hot-loader/patch',
  entryPath
] : entryPath;

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    __DEV__: isDevelopment
  }),
    new webpack.LoaderOptionsPlugin({
       debug: isDevelopment
     })
];

isDevelopment && plugins.push(new webpack.HotModuleReplacementPlugin());


module.exports = {
    entry: entry,
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.join(__dirname, 'node_modules')]
    },
    context: __dirname,
    watch: true,
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
    plugins: plugins

}