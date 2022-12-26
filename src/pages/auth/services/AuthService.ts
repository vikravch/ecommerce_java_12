import {AxiosResponse} from "axios"
import {IAuthResponse} from "../models/IAuthResponse";
import instance from "../http/api";


export const authAPI = {
    signIn(email: string, password: string | undefined): Promise<AxiosResponse<IAuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<IAuthResponse>('/signIn', {email, password})
    },

    signUp(name: string | undefined, email: string, password: string | undefined): Promise<AxiosResponse<IAuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<IAuthResponse>('/signUp', {name, email, password})
    },
    restorePassword(email: string): Promise<AxiosResponse<IAuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<IAuthResponse>('/restorePassword', {email})
    },

//     logout(): Promise<void> {
//         //1 параметр адрес эндпоинта второй параметр - тело запроса
//         return instance.post('/logout')
//     },
}
