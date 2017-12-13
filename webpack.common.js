module.exports = {
    entry: {
        main: './src/main.jsx',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
            },
        ],
    },
    plugins: [

    ],
};
