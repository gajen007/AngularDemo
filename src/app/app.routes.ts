import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { UserdataComponent } from './pages/userdata/userdata.component';
import { LifecyclehooksComponent } from './pages/lifecyclehooks/lifecyclehooks.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OnchangesComponent } from './pages/lifecyclehooks/onchanges/onchanges.component';
import { OninitComponent } from './pages/lifecyclehooks/oninit/oninit.component';
export const routes: Routes = [
    { path: '',   redirectTo: '/welcome', pathMatch: 'full' }, // redirect to `welcome`
    { path: 'welcome', component: WelcomeComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'userdata', component: UserdataComponent },
    { path: 'lifecyclehooks', component: LifecyclehooksComponent },
    { path: 'lifecyclehooks/onchanges', component: OnchangesComponent },
    { path: 'lifecyclehooks/oninit', component: OninitComponent },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
