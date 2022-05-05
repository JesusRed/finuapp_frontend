/* eslint-disable prettier/prettier */
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JesusRed/finuapp_frontend',
    withCredentials: false,
    headers: {
        Accept: 'applicaction/json',
        'Content-Type': 'applicaction/json',
    },
})

export default {
    getProjects() {
        return apiClient.get('/projects')
    }
}