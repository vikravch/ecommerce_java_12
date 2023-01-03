import axios, {AxiosResponse} from "axios";
import {BIG_TITLE_BLOG_URL, BLOG_URL, TITLE_BLOG_URL} from "./apiConst";
import {IBlogTitleResponse} from "../models/IBlogTitleResponse";
import {IBlogResponse} from "../models/IBlogResponse";
import {IBlogBigTitleResponse} from "../models/IBlogBigTitleResponse";

// const instance = axios.create({
//     baseURL: API_BASE_URL
// })

export const blogTitleAPI = {
    blogTitle(): Promise<AxiosResponse<IBlogTitleResponse>>{
        return axios.get(TITLE_BLOG_URL)

    },

    blogBigTitle(): Promise<AxiosResponse<IBlogBigTitleResponse>> {
        return axios.get<IBlogBigTitleResponse>(BIG_TITLE_BLOG_URL)
    },

    blog(): Promise<AxiosResponse<IBlogResponse>> {
        return axios.get<IBlogResponse>(BLOG_URL)
    },

}


