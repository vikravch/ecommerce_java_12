import {authAPI} from "../../services/AuthService";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "../../models/IAuthResponse";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IFormData} from "../../models/IFormData";

export const restorePasswordAction = createAsyncThunk<IAuthResponse, IFormData, { rejectValue: string }>(
    "restorePassword/restorePasswordAction",
    async function (dataRestorePassword, {rejectWithValue}) {
        try {
            const response: AxiosResponse<IAuthResponse> = await authAPI.restorePassword(dataRestorePassword.email);
            return await response.data;
        } catch (error) {
            return rejectWithValue('Server Error');
        }
    }
)
