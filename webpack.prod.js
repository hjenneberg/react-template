/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new ManifestPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
});
