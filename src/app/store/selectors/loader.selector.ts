import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectLoaderFeature = createFeatureSelector<Boolean>('loader');

export const selectIsLoading = createSelector(
    selectLoaderFeature,
    (state: Boolean) => state
);