import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/AuthResponse";
import instance from "../http/api";
import {RestorePassword} from "../presentation/RestorePassword";


export const authAPI = {
    login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<AuthResponse>('/login', {email, password})
    },

    registration(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<AuthResponse>('/registration', {name, email, password})
    },
    restorePassword(email: string): Promise<AxiosResponse<AuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<AuthResponse>('/restorePassword', {email})
    },

//     logout(): Promise<void> {
//         //1 параметр адрес эндпоинта второй параметр - тело запроса
//         return instance.post('/logout')
//     },
}
