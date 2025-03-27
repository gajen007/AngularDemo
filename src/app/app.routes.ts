import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '',   redirectTo: '/welcome', pathMatch: 'full' }, // redirect to `welcome`
    { path: 'welcome', component: WelcomeComponent },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
