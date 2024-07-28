import axios from 'axios'
import config from "../config.js"

const $api = axios.create({
    withCredentials: true,
    baseURL: config.API_URL
})

export default $api