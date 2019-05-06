import BaseService from './BaseService'
import store from '../store'

export default class Service extends BaseService {
  /**
   * 用户登录
   * **/
  static login () {
    Service.get('/api/v1/login').then((res) => {
      let token = res.token
      store.commit('setToken', token)
      window.localStorage.setItem('token', token)
    })
  }
  /**
   * 检查用户登录
   * **/
  static checkLogin () {
    let token = window.localStorage.getItem('token')
    if (token) {
      store.commit('setToken', token)
    } else {
      Service.login()
    }
  }
  /**
   * 返回获取vuex中的token
   * **/
  static getStoreToken () {
    return store.state.token
  }
}
