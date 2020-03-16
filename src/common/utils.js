/**
 * JS 防抖函数
 * @param {*} callback 回调函数
 * @param {*} delay 延迟时间
 */
export function debounce(callback, delay){
  let timer = null
  return (...args) => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}