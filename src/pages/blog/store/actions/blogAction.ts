import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleAPI} from "../../api/api";
import {AxiosResponse} from "axios";
import {IBlogResponse} from "../../models/IBlogResponse";

export const blogAction = createAsyncThunk<IBlogResponse, undefined, { rejectValue: string }>(
    "blogTitles/blogAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse<IBlogResponse> = await blogTitleAPI.blog();
            return  response.data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)