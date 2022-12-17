import {AppDispatch} from "../store";
import {authAPI} from "../../services/AuthService";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../../models/AuthResponse";
import {registrationSlice} from "../reducers/regReducer";

export const registrationCreator = (name: string, email: string, password: string) =>
    async (dispatch: AppDispatch) => {
    try {
        dispatch(registrationSlice.actions.registrationFetching())
        const response: AxiosResponse<AuthResponse> = await authAPI.registration(name, email, password);
        dispatch(registrationSlice.actions.registrationFetchingSuccess(response.data.error))
           } catch (e) {
        dispatch(registrationSlice.actions.registrationFetchingError("ERROR"))
    }
}