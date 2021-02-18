const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development', // | production
    devtool: 'eval', // "eval" 이면 webpack이 빌드하는 속도 빠름 | hiddden-source-map
    resolve: {  // 확장자들을 처리
        extensions: ['.vue', '.js']
    },
    entry:{
        app: path.join(__dirname, 'main.js')// './main.js'
    },
    module:{
        rules: [{
            test:/\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins:[
        new vueLoaderPlugin()
    ],
    output:{
        filename: '[name].js', //app.js 와 동일
        path: path.join(__dirname, 'dist')
    }
}