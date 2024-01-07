import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { rootReducer } from './store/reducers/index.reducer';
import { provideEffects } from '@ngrx/effects';
import { LoginEffect } from './store/effects/login.effect';
import { loaderInterceptor } from './interceptors/loader/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    provideStore(rootReducer),
    provideEffects(LoginEffect),
    provideStoreDevtools(),
]
};
