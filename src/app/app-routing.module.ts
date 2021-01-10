import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';
import { AquariumCreateComponent } from './features/aquarium/aquarium-create/aquarium-create.component';
import { AquariumDetailedComponent } from './features/aquarium/aquarium-detailed/aquarium-detailed.component';
import { AquariumUpdateComponent } from './features/aquarium/aquarium-update/aquarium-update.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoggedGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [LoggedGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'aquarium',
    children: [
      { path: 'create', component: AquariumCreateComponent, pathMatch: 'full'},
      { path: 'update/:id', component: AquariumUpdateComponent },
      { path: ':id', component: AquariumDetailedComponent },
    ]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
