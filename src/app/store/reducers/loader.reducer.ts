import { createReducer, on } from "@ngrx/store";
import * as LoaderAction from "../actions/loader.action";

export const initialState: Boolean = false;

export const loaderReducer = createReducer(
    initialState,
    on(LoaderAction.loadingStart, () => true),
    on(LoaderAction.loadingStop, () => false),
);