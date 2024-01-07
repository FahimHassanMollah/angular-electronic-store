import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../../services/login/login.service';
import * as loginActions from '../actions/login.action';
import { concatMap, map, mergeMap, switchMap } from 'rxjs';
@Injectable()
export class LoginEffect {

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) { }
  login$ = createEffect(() => {
    console.log('login effect centered');
    
    return this.actions$.pipe(
      ofType(loginActions.login),
      switchMap((action)=>{
        console.log('in the merge map  : ');
        
        return this.loginService.loginUser(action).pipe(
          map((response)=>{
            return loginActions.loginSuccess(response);
          })
        );
      })
    )
  });
}
