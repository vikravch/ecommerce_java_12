import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {blogTitleAction} from "../actions/blogTitleAction";
import {IBlogTitleResponse} from "../../models/IBlogTitleResponse";
import {IBlogTitleBody} from "../../models/IBlogTitleBody";

type blogsState = {
    blogTitles: IBlogTitleBody[] | null;
    isLoading: boolean;
    error: string | null;
}


const initialState: blogsState = {
    blogTitles: [],
    isLoading: true,
    error: null,
};

const blogTitleSlice = createSlice({
    name: 'blogTitles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
             builder
            .addCase(blogTitleAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogTitleAction.fulfilled, (state, action: PayloadAction<IBlogTitleResponse>) => {
                state.blogTitles = action.payload.movies;
                state.isLoading = false;
            })
            .addCase(blogTitleAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export default blogTitleSlice.reducer;