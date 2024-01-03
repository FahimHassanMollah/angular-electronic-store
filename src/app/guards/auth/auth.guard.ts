import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/index.reducer';
import { map } from 'rxjs';
import { isLoggedin } from '../../store/selectors/login.selector';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const store: Store<AppState> = inject(Store);
  const router = inject(Router);
  const isLoggedin$ = store.select(isLoggedin);
  return isLoggedin$.pipe(
    map((isLoggedin) => {
      if (isLoggedin) {
        return true;
      }
      router.navigate(['/login']);
      return false;
    })
  );

};

