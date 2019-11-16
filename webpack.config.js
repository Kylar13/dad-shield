const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    entry: {
        content: './src/extension/content.tsx',
        background: './src/extension/background.ts',
        popup: './src/widget/components/popup/popup.tsx',
        test: './src/overlay/test.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
};
