import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";
import { LoginResponse } from "../../models/login.model";

export const login = createAction('[Login Page] Login', props<User>());
export const loginSuccess = createAction('[Login Page] Login Success', props<LoginResponse>());