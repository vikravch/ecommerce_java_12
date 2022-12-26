import {IAuthResponse} from "../../models/IAuthResponse";
import {createSlice} from "@reduxjs/toolkit";
import {signInAction} from "../actions/signInAction";

type loginState = {
    loginResponse: IAuthResponse,
    isLoading: boolean,
    errorSlice: string | null | undefined
}
const initialState: loginState = {

    loginResponse: {id: null, accessToken: null, error: undefined},
    isLoading: false,
    errorSlice: ''
}

export const signInSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInAction.pending, (state) => {
                state.isLoading = true;
                state.errorSlice = null;
            })
            .addCase(signInAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.loginResponse = action.payload;
            })
            .addCase(signInAction.rejected, (state, action) => {
                state.isLoading = false;
                state.errorSlice = action.payload;
            })
    }
})

export default signInSlice.reducer;
