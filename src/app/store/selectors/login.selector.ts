import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginResponse } from "../../models/login.model";

const selectLoginFeature = createFeatureSelector<LoginResponse>('login');

export const selectLogin = createSelector(
    selectLoginFeature,
    (state: LoginResponse) => state
);

export const isLoggedin = createSelector(
    selectLoginFeature,
    (state: LoginResponse) => !!state.jwtToken
);