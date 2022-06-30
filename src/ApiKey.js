import axios from "axios"

const api = axios.create({
  api_key: process.env.REACT_APP_API_KEY,
})

export default api
