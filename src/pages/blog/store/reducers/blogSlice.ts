import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBlogResponse} from "../../models/IBlogResponse";
import {blogAction} from "../actions/blogAction";
import {IBlogBody} from "../../models/IBlogBody";


type blogsState = {
    blogPost: IBlogBody[]
    isLoading: boolean;
    error: string | null;
    maxItems: number | null;
    currentPage: number
}


const initialState: blogsState = {
    blogPost: [],
    isLoading: true,
    error: null,
    maxItems: 0,
    currentPage: 1
};

const blogSlice = createSlice({
    name: 'blogBigTitles',
    initialState,
    reducers: {
        // addCurrentPage(state){
        //     currentPageNew : state.currentPage;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(blogAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogAction.fulfilled, (state, action: PayloadAction<IBlogResponse>) => {
                state.blogPost = action.payload.blogs
                state.maxItems = action.payload.totalCount;
                state.isLoading = false;
            })
            .addCase(blogAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export default blogSlice.reducer;