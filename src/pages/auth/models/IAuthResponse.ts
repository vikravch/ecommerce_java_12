//После логина, регистрации или рефреша нам возвращается объект с данными полями


export interface IAuthResponse {
    id?: number | null
    accessToken?: string | null
    error?: string

}

