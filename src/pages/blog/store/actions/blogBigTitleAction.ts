import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleAPI} from "../../api/api";
import {AxiosResponse} from "axios";
import {IBlogBigTitleResponse} from "../../models/IBlogBigTitleResponse";

export const blogBigTitleAction = createAsyncThunk<IBlogBigTitleResponse, undefined, { rejectValue: string }>(
    "blogTitles/blogBigTitleAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse<IBlogBigTitleResponse> = await blogTitleAPI.blogBigTitle();
            return response.data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)