import {authAPI} from "../../services/AuthService";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "../../models/IAuthResponse";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IFormData} from "../../models/IFormData";

export const signUpAction = createAsyncThunk<IAuthResponse, IFormData, { rejectValue: string }>(
    "registration/signUpAction",
    async function (dataSignUp, {rejectWithValue}) {
        try {
            const response: AxiosResponse<IAuthResponse> = await authAPI.signUp(
                dataSignUp.name,
                dataSignUp.email,
                dataSignUp.password);
            return await response.data;
        } catch
            (error) {
            return rejectWithValue('Server Error');
        }
    }
)
