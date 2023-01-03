import {IBlogBody} from "./IBlogBody";

export interface IBlogResponse {
    blogs: IBlogBody[]
    totalCount: number | null
}