import Ajax from '../lib/Ajax'
const ajax = new Ajax()

export default class BaseService {
  static ajax = ajax

  static get (...arg) {
    return ajax.get(...arg)
  }
  static post (...arg) {
    return ajax.post(...arg)
  }
  // constructor (url, token) {
  //   this.url = url
  //   this.token = token
  // }
  // getInfo () {
  //   if (!this.token) {
  //     this.logInfo()
  //   }
  // }
  // logInfo () {
  //   api.get(this.url).then(result => {
  //     let str = JSON.stringify(result)
  //     localStorage.setItem('token', str)
  //   })
  // }
}
