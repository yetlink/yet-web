/**
 * 去首尾空格
 * @param str string  字符串
 * **/
export const trim = (str) => {
  if (typeof str === 'string') {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
  return str
}
