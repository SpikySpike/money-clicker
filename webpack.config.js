const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const dest = path.join(__dirname, "/docs");

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    // Where files should be sent once they are bundled
    output: {
        path: dest,
        filename: "index.js",
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cwd: __dirname,
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: path.resolve(dest, "assets") },
                { from: "src/styles.css", to: dest },
            ],
        }),
    ],
};
