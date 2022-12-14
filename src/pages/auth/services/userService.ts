import instance from "../http/api";
import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

export const fetchAPI = {
    fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return instance.get<IUser[]>('/users');
    }
}