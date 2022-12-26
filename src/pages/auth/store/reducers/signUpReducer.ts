import {IAuthResponse} from "../../models/IAuthResponse";
import {createSlice} from "@reduxjs/toolkit";
import {signUpAction} from "../actions/signUpAction";

type registrationState = {
    registrationResponse: IAuthResponse,
    isLoading: boolean,
    errorSlice: string | null | undefined
}
const initialState: registrationState = {
    registrationResponse: {error: undefined},
    isLoading: false,
    errorSlice: ''
}

export const signUpSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUpAction.pending, (state) => {
                state.isLoading = true;
                state.errorSlice = null;
            })
            .addCase(signUpAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.registrationResponse = action.payload;
            })
            .addCase(signUpAction.rejected, (state, action) => {
                state.isLoading = false;
                state.errorSlice = action.payload;
            })
    }
})

export default signUpSlice.reducer;
