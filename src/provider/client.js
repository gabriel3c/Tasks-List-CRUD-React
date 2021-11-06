import axios from 'axios'

const apiCode = '07fyjcl'

const client = axios.create({
  baseURL: `https://otterwise-fake-api.herokuapp.com/tasks/${apiCode}`
})

export default client
