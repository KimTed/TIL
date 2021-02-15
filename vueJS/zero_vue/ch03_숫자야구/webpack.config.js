module.exports = {
    entry:{
        app: './main.js'
    },
    module:{
        rules: [{}]
    },
    plugins:[],
    output:{
        filename: '[name].js', //app.js 와 동일
        path: './dist'
    }
}