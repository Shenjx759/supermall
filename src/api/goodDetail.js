import { request } from 'network/request'

export function getGoodDetailByIid(iid) {
  return request({
    url: '/detail',
    method: 'GET',
    params: {
      iid
    }
  })
}