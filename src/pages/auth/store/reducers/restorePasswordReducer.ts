import {authAPI} from "../../services/AuthService";
import {AuthResponse} from "../../models/AuthResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


let initialState: AuthResponse = {
    id: null,
    isLoading: false,
    error: ''
}

export const restorePasswordSlice = createSlice({
    name: 'restorePassword',
    initialState,
    reducers: {
        restorePasswordFetching(state) {
            state.isLoading = true;
        },
        restorePasswordFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        restorePasswordFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default restorePasswordSlice.reducer;
