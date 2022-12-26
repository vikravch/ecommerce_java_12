import {IAuthResponse} from "../../models/IAuthResponse";
import {createSlice} from "@reduxjs/toolkit";
import {restorePasswordAction} from "../actions/restorePasswordAction";

type restorePasswordState = {
    restorePasswordResponse: IAuthResponse,
    isLoading: boolean,
    errorSlice: string | null | undefined
}
const initialState: restorePasswordState = {
    restorePasswordResponse: {error: undefined},
    isLoading: false,
    errorSlice: ''
}

export const restorePasswordSlice = createSlice({
    name: 'restorePassword',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(restorePasswordAction.pending, (state) => {
                state.isLoading = true;
                state.errorSlice = null;
            })
            .addCase(restorePasswordAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restorePasswordResponse = action.payload;
            })
            .addCase(restorePasswordAction.rejected, (state, action) => {
                state.isLoading = false;
                state.errorSlice = action.payload;
            })
    }
})

export default restorePasswordSlice.reducer;
