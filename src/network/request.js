/*
 * @Author: your name
 * @Date: 2020-03-12 12:29:47
 * @LastEditTime: 2020-03-18 15:59:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\supermall\src\network\request.js
 */
import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    //baseURL: "http://106.54.54.237:8000/api/wh", // 备用地址
    timeout: 10000
  })
  
  // 请求拦截器
  instance.interceptors.request.use(config => {
      // console.log('请求成功、执行的拦截器操作')
      return config
    },
  err => {
    console.log(err)
  })
  
  // 响应拦截器
  instance.interceptors.response.use(resp => {
      // console.log('响应成功、执行的拦截器操作')
    return resp.data
  },
  err => {
    console.log(err)
  })
  
  // 发送请求
  return instance(config)
}
