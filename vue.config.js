const { UniAppWeappTailwindcssWebpackPluginV4 } = require("weapp-tailwindcss-webpack-plugin");

const TransformPages = require("uni-read-pages");

const { webpack } = new TransformPages();

const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: { "@": resolve("src") },
        },
        plugins: [
            new UniAppWeappTailwindcssWebpackPluginV4(),
            new webpack.DefinePlugin({
                ROUTES: webpack.DefinePlugin.runtimeValue(() => {
                    const tfPages = new TransformPages({
                        includes: ["path", "name", "aliasPath", "meta"],
                    });
                    return JSON.stringify(tfPages.routes);
                }, true),
            }),
        ],
    },
};
