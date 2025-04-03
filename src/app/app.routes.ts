import { Routes } from '@angular/router';
import { PageComponent } from './Components/page/page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pages',
        component: PageComponent
    }
];
