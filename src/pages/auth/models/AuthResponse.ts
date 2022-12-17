//После логина, регистрации или рефреша нам возвращается объект с данными полями


export interface AuthResponse {
    id: number | null
    accessToken?: string | null
    isLoading: boolean,
    error:string

}

