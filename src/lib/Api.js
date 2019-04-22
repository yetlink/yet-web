import axios from 'axios'

const api = axios.create({
  baseUrl: 'http://link.yet.ink'
})

api.defaults.withCredentials = true
api.defaults.headers.post['Content-Type'] = 'application/json'
export default {
  api
}
