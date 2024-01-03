import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { loginReducer } from './store/reducers/login.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { rootReducer } from './store/reducers/index.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(),
    provideStore(rootReducer),
    provideStoreDevtools(),
]
};
