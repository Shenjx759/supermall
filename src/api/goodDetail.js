/*
 * @Author: your name
 * @Date: 2020-03-17 21:51:23
 * @LastEditTime: 2020-03-20 16:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\api\goodDetail.js
 */
import {
  request
} from 'network/request'
/**
 * 请求商品明细
 * @param {*} iid 商品iid
 */
export function getGoodDetailByIid(iid) {
  return request({
    url: '/detail',
    method: 'GET',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class ParamInfo {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : ''
    // this.image = detailInfo.detailImage[0].list
    this.infos = info.set
    this.sizes = rule.tables
  }
}

/**
 * 请求推荐数据
 */
export function getRecommendData() {
  return request({
    url: '/recommend',
    method: 'GET'
  })
}
