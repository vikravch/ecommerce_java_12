//После логина, регистрации или рефреша нам возвращается объект с данными полями

import {IUser} from "./IUser";

export interface AuthResponse {
    attrs: any;
    accesssToken: string;
    refreshToken: string;
    user: IUser;
}

