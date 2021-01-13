import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './core/guards/logged.guard';
import { AquariumGuard } from './features/aquarium/guard/aquarium.guard';
import { HomeComponent } from './features/home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aquarium', loadChildren: () => import('./features/aquarium/aquarium.module').then(mod => mod.AquariumModule), canActivate: [AquariumGuard] },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule), canActivate: [LoggedGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
