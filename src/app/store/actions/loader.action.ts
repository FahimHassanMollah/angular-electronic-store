import { createAction } from "@ngrx/store";

export const loadingStart = createAction('[Loader] Start Loading');
export const loadingStop = createAction('[Loader] Stop Loading');