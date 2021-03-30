import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-c3e5d-default-rtdb.firebaseio.com',
})

export default instance
