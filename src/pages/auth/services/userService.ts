import instance from "../../../../../../project/ecommerce_java_12/src/pages/auth/http/api";
import {AxiosResponse} from "axios";
import {IUser} from "../../../../../../project/ecommerce_java_12/src/pages/auth/models/IUser";

export const fetchAPI = {
    fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return instance.get<IUser[]>('/users');
    }
}