import { LoginResponse } from "../../models/login.model";
import { loaderReducer } from "./loader.reducer";
import { loginReducer } from "./login.reducer";

export interface AppState {
    login: LoginResponse,
    loader: Boolean
}
export const rootReducer  = {
    login:loginReducer,
    loader:loaderReducer
}