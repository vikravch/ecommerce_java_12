import {authAPI} from "../../services/AuthService";
import {AuthResponse} from "../../models/AuthResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


let initialState: AuthResponse = {
    id: null,
    isLoading: false,
    error: ''
}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registrationFetching(state) {
            state.isLoading = true;
        },
        registrationFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        registrationFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default registrationSlice.reducer;
