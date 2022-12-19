import {AppDispatch} from "../../../../general/redux/store";
import {authAPI} from "../../services/AuthService";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../../models/AuthResponse";
import {IFormData} from "../../models/formData";
import {loginSlice} from "../reducers/authReducer";
import {ERROR_MESSAGES} from "devtools/build/constants";

export const loginCreator = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginSlice.actions.loginFetching())
        const response: AxiosResponse<AuthResponse> = await authAPI.login(email, password);
        console.log(response.data.id)
        console.log(response.data)
        if (response.data.accessToken && response.data.accessToken) {

            dispatch(loginSlice.actions.loginFetchingSuccess(response.data.accessToken))
        } else {
            dispatch(loginSlice.actions.loginFetchingSuccessError(response.data.error))
        }

    } catch (e) {
        dispatch(loginSlice.actions.loginFetchingError("ERROR"))

    }
}
