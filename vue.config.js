/*
 * @Author: your name
 * @Date: 2020-03-11 19:54:34
 * @LastEditTime: 2020-03-31 16:12:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\vue.config.js
 */
// vue cli3配置额外需要的配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: { // 配置路径别名 vue cli3中默认配置了一个@符号的路径别名、并且指向src目录！
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'api': '@/api'
      }
    },
    devServer: {
      disableHostCheck: true // 设置了这个才能映射域;名！
    }
  },
  publicPath: './'
}
