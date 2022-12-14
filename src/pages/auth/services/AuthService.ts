import {AxiosResponse} from "axios"
import {AuthResponse} from "../../../../../../project/ecommerce_java_12/src/pages/auth/models/AuthResponse";
import instance from "../../../../../../project/ecommerce_java_12/src/pages/auth/http/api";


 export const authAPI = {
    login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        //1 параметр адрес эндпоинта второй параметр - тело запроса
        return instance.post<AuthResponse>('/login', {email, password})
    },

    // registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     //1 параметр адрес эндпоинта второй параметр - тело запроса
    //     return instance.post<AuthResponse>('/registration', {email, password})
    // },

//     logout(): Promise<void> {
//         //1 параметр адрес эндпоинта второй параметр - тело запроса
//         return instance.post('/logout')
//     },
 }
