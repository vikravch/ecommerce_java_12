import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {blogBigTitleAction} from "../actions/blogBigTitleAction";
import {IBlogTitleResponse} from "../../models/IBlogTitleResponse";
import {IBlogResponse} from "../../models/IBlogResponse";
import {IBlogBigTitleResponse} from "../../models/IBlogBigTitleResponse";
import {IBlogTitleBody} from "../../models/IBlogTitleBody";


type blogsState = {
    blogBigTitles: IBlogTitleBody[];
    isLoading: boolean;
    error: string | null;
}


const initialState: blogsState = {
    blogBigTitles: [],
    isLoading: true,
    error: null,
};

const blogBigTitleSlice = createSlice({
    name: 'blogBigTitles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(blogBigTitleAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogBigTitleAction.fulfilled, (state, action: PayloadAction<IBlogBigTitleResponse>) => {
                state.blogBigTitles = action.payload.titles;
                state.isLoading = false;
            })
            .addCase(blogBigTitleAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export default blogBigTitleSlice.reducer;