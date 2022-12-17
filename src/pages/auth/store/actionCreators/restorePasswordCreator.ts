import {AppDispatch} from "../store";
import {authAPI} from "../../services/AuthService";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../../models/AuthResponse";
import {registrationSlice} from "../reducers/regReducer";
import {restorePasswordSlice} from "../reducers/restorePasswordReducer";

export const restorePasswordCreator = (email: string) =>
    async (dispatch: AppDispatch) => {
    try {
        dispatch(restorePasswordSlice.actions.restorePasswordFetching())
        const response: AxiosResponse<AuthResponse> = await authAPI.restorePassword(email);
        dispatch(restorePasswordSlice.actions.restorePasswordFetchingSuccess(response.data.error))
           } catch (e) {
        dispatch(restorePasswordSlice.actions.restorePasswordFetchingError("ERROR"))
    }
}