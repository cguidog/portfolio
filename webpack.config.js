const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) =>{ 

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
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
            use: CSSExtract.extract({
                use: [
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        }]
    },
    plugins: [
        CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', //Allows the browser to show the specific source of an element/error in the console
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
};