import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // lista
  { path: 'crear', component: CreateComponent },
  { path: ':usuario', component: DetailsComponent}, // ver
  { path: ':usuario/acceso', component: PasswordResetComponent },
  { path: ':usuario/capacidades', component: PermissionsComponent },
  { path: '**', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
