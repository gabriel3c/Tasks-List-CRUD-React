import axios from 'axios'

const apiCode = '07fyjcl'

const client = axios.create({
  baseURL: `https://otterwise-fake-api.herokuapp.com/tasks/${apiCode}`
})

// email: gabrielmreinhardt@gmail.com
// senha: jHkZyG
// api_code: 07fyjcl,

export default client