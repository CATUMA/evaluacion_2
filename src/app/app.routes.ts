import { Routes } from '@angular/router';
import { TruncateComponent } from './truncate/truncate.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "truncate", component: TruncateComponent},
    {path: "routes", component: RoutesComponent,
        
        children: [
            {path:"home", component: HomeComponent, canActivate: [authGuard] },
            {path:"login", component: LoginComponent},
            {path:"profile", component: ProfileComponent, canActivate: [authGuard]}
        ]

    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
    

];
