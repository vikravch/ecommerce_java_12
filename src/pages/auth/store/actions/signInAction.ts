import {authAPI} from "../../services/AuthService";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "../../models/IAuthResponse";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IFormData} from "../../models/IFormData";

export const signInAction = createAsyncThunk<IAuthResponse, IFormData, { rejectValue: string }>(
    "login/signInAction",
    async function (dataSignIn, {rejectWithValue}) {
        try {
            const response: AxiosResponse<IAuthResponse> = await authAPI.signIn(dataSignIn.email, dataSignIn.password);
            return await response.data;
        } catch (error) {
            return rejectWithValue('Server Error');
        }
    }
)

