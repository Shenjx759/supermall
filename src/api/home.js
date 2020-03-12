import {request} from "network/request"

export function getHomeMultiData(){
  return request({
    url: '/home/multidata',
    method: 'GET'
  })
}

export function getHomeGoods(type, page){
  return request({
    url: '/home/data',
    method: 'GET',
    params: {
      type,
      page
    }
  })
}
