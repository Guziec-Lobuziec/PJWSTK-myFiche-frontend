import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogNavigatorComponent } from './catalog-navigator/catalog-navigator.component';


export var appRoutes: Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'catalog',
        component:  CatalogNavigatorComponent
    }
]