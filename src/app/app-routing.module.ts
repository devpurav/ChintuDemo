import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./login-user/login-user.module').then(m => m.LoginUserModule) },
  { path: 'data', loadChildren: () => import('./demo-data/demo-data.module').then(m => m.DemoDataModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
