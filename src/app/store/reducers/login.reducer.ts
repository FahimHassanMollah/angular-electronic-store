import { createReducer, on } from "@ngrx/store";
import { LoginResponse } from "../../models/login.model";
import * as LoginAcion from "../actions/login.action";

export const initialState: LoginResponse  = {
  jwtToken: "",
  user: {
    name: "",
    email: "",
    password: "",
    gender: "",
    about: "",
  }
};

export const loginReducer = createReducer(
  initialState,
  on(LoginAcion.loginSuccess, (state,payload) => ({...state, ...payload})),
);