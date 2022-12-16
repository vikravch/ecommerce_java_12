import {authAPI} from "../../services/AuthService";
import {AuthResponse} from "../../models/AuthResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState: AuthResponse = {
    id: null,
    accessToken: '',
    isLoading: false,
    error: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginFetching(state) {
            state.isLoading = true;
        },
        loginFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.accessToken = action.payload;
        },
        loginFetchingSuccessError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default loginSlice.reducer;
