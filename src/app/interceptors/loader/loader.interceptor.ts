import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs';
import { AppState } from '../../store/reducers/index.reducer';
import * as LoaderActions from '../../store/actions/loader.action';


export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const store: Store<AppState> = inject(Store);
  store.dispatch(LoaderActions.loadingStart());
  return next(req).pipe(
    finalize(() => store.dispatch(LoaderActions.loadingStop()))
  );
};
