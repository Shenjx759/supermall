/*
 * @Author: your name
 * @Date: 2020-03-30 10:58:36
 * @LastEditTime: 2020-03-30 21:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\api\category.js
 */
import {
  request
} from 'network/request'

export function getCategoryMenu() {
  return request({
    url: '/category',
    method: 'GET'
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    method: 'GET',
    params: {
      maitKey
    }
  })
}

export function getSubCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    method: 'GET',
    params: {
      miniWallkey,
      type
    }
  })
}
