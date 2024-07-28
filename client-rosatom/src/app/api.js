import axios from 'axios'

const $api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8055"
})

export default $api