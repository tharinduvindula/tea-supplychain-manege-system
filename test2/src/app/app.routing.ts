import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { FrogetPasswordComponent } from './froget-password/froget-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegistationComponent } from './registation/registation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'manager',
    redirectTo: 'manager/dashboard',
    pathMatch: 'full',
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'froget-password',
    component: FrogetPasswordComponent,
  }, {
    path: 'password-reset',
    component: PasswordResetComponent,
  }, {
    path: 'registaition',
    component: RegistationComponent,
  },  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }, {
    path: '',
    component: ManagerLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/manager-layout/manager-layout.module#ManagerLayoutModule',
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
