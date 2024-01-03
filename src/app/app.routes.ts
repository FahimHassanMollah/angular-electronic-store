import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: 'full',
    },
    {
        path: "home",
        title: "Home",
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: "about-us",
        title: "About Us",
        component: AboutUsComponent,
        canActivate: [authGuard]

    },
    {
        path: "categories",
        title: "Categories",
        component: CategoriesComponent
    },
    {
      path : "signup",
      title : "Sign Up",
      component : SignupComponent
    },
    {
        path : "login",
        title : "Login",
        component : LoginComponent
    }
];
