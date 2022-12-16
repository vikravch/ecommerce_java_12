import axios from "axios"

export const API_URL = `/api/`

const instance = axios.create({
    withCredentials: true,                    //cockie цепляются фвтоматически
    baseURL: API_URL
})
export default instance;