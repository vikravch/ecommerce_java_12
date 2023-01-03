import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleAPI} from "../../api/api";
import {AxiosResponse} from "axios";
import {IBlogTitleResponse} from "../../models/IBlogTitleResponse";

export const blogTitleAction = createAsyncThunk<IBlogTitleResponse, undefined, { rejectValue: string }>(
    "blogTitles/blogTitleAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse<IBlogTitleResponse> = await blogTitleAPI.blogTitle();
            return response.data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)