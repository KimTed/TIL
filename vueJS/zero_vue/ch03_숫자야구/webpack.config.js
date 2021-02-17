const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
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