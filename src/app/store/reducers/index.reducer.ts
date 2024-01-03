import { LoginResponse } from "../../models/login.model";
import { loginReducer } from "./login.reducer";

export interface AppState {
    login: LoginResponse
}
export const rootReducer  = {
    login:loginReducer
}