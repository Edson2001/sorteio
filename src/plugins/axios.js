import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org'
})

export default api