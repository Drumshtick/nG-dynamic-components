import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'protected',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [AuthGuard],// This is what protects the route
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
