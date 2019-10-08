/*
* 本js文件是webpack的核心配置文件，
*   1.里面所配置的是：所有webpack要去做的“任务”，该文件不可随意更改名字。
*   2.所有的配置文件，都必须按照官方要求去写。
*   3.webpack在运行时，会自动读取该文件里的配置
* */

//引入path模块，用于解决路径问题
const {resolve} = require('path');

//webpack的配置文件，使用CommonJs语法暴露出去一个对象
module.exports = {
  //配置入口文件所在的位置
  entry: './src/js/app.js',
  //entry还可以按照如下方式编写
  /*entry: {
    haha: './src/js/app.js'
  },*/
  //配置webpack的输出位置
  output: {
    path: resolve(__dirname, 'dist/js/'), //输出位置
    filename: 'app.js', //文件名
  },
  mode:'development', //模式的选择
  //所有的loader都要配置在module对象里的rules里
  module: {
    //所有的loader都要配置在这里,loader下载后直接声明使用即可，无需引入。
    rules: [
      {
        test: /\.less$/,//匹配所有.less文件
        //use里的多个loader，“干活”的顺序是：从右到左的顺序
        use: [
          'style-loader', // 根据css模块动态的生成一个style标签，将样式嵌入进去
          'css-loader', // 将css翻译成一个CommonJs的模块
          'less-loader' // 将less转换为css
        ]
      },
    ]
  }
};

