import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'covid', loadChildren: () => import('./covid/covid.module').then( m => m.CovidModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
