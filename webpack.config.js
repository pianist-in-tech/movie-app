const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html',
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'"babel-loader',
                },
            },
            //adding loaders
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [htmlPlugin],
    devServer: {
        port: 8080, // Use any available port
        open: true, // Automatically open browser
        static: './dist', // Serve file