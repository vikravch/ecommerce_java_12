import axios from "axios"

export const API_URL = `http://localhost:5000/api`

const instance = axios.create({
   // withCredentials: true,                    //cockie цепляются фвтоматически
    baseURL: API_URL
})

//interceptor на запрос(request) - на каждый запрос цепляем token
// instance.interceptors.request.use((config) => {
//     // @ts-ignore
//     config.headers.Authorization = `Bearer ${localStorage(getItem('token'))}`
//     return config;
// })

export default instance;