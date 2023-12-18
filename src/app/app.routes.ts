import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: 'full'
    },
    {
        path: "home",
        title: "Home",
        component: HomeComponent,
    },
    {
        path: "about-us",
        title: "About Us",
        component: AboutUsComponent,
    },
    {
        path: "categories",
        title: "Categories",
        component: CategoriesComponent
    }
];
