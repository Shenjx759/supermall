/*
 * @Author: your name
 * @Date: 2020-03-24 21:11:16
 * @LastEditTime: 2020-03-24 21:20:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodsCart: [{
      image: '//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg',
      title: '2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮',
      desc: '你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~',
      price: '￥68.00'
    }]
  }
})

export default store