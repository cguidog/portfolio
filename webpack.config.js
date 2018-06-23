const path = require('path');



module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', //tells webpack to run our js files through babel
            test: /\.js$/,
            exclude: /node_molude/
        }, {
            test: /\.s?css$/, //question mark makes the 's' optional so we can look for css and scss files.
            use: ['style-loader',
            'css-loader',
            'sass-loader'
        ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', //Allows the browser to show the specific source of an element/error in the console
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};