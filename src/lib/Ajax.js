import axios from 'axios'
import { proxy } from '../config'
import { trim } from './util'

const GET = 'GET'
const POST = 'POST'

export default class Ajax {
  constructor () {
    // 反向代理
    this.proxy = process.env.NODE_ENV === 'development' ? proxy : ''
    // 当前请求url集合
    this.links = {}
  }
  /**
   * GET请求
   * **/
  get (...arg) {
    return this.request(GET, ...arg)
  }
  /**
   * POST请求
   * **/
  post (...arg) {
    return this.request(POST, ...arg)
  }
  /**
   * HTTP请求
   * @param method      string      请求方式 ['POST', 'GET']
   * @param url         string      请求地址
   * @param params      object      请求参数
   * @param single      bool        是否禁止同时调用多个相同URL请求
   * @return Promise
   * **/
  request (method, url, params, single = true) {
    if (single && this.links[url]) {
      // 返回空Promise，不执行resolve/reject
      return new Promise(() => {})
    }
    const instance = axios.create()
    this.interceptors(instance, url)
    return instance(this.getConfig(method, url, params))
  }
  /**
   * 获取配置
   * **/
  getConfig (method, url, params) {
    const config = {
      url,
      method,
      baseURL: this.proxy,
      headers: {
        'content-type': 'application/json',
        'token': '' // todo 可在这里执行token方法
      }
    }
    if (typeof params === 'object') {
      // 处理最外层的首尾去空
      Object.entries(params).forEach(([key, value]) => {
        params[key] = trim(value)
      })
      if (method === GET) {
        config.params = params
      }
      if (method === POST) {
        config.data = JSON.stringify(params)
      }
    }
    return config
  }
  /**
   * 拦截器
   * **/
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      this.links[url] = true
      return config
    }, error => Promise.reject(error))
    // 响应拦截
    instance.interceptors.response.use(({ data }) => {
      delete this.links[url]
      return data
    }, error => {
      delete this.links[url]
      if (error.response.data && error.response.data.msg) {
        // todo 这里可以处理全局错误消息
      }
      return Promise.reject(error.response.data)
    })
  }
}
