import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { GroupAssignComponent } from './pages/group-assign/group-assign.component';
import { GradesDetailComponent } from './pages/grades-detail/grades-detail.component';
import { GradesUpdateComponent } from './pages/grades-update/grades-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // lista
  { path: 'registrar', component: AddComponent },
  { path: ':matricula', component: DetailsComponent }, // ver
  { path: ':matricula/asignar-grupo', component: GroupAssignComponent },
  { path: ':matricula/calificaciones', children: [
    { path: '', component: GradesDetailComponent },
    { path: 'editar', component: GradesUpdateComponent },
  ]},
  { path: '**', redirectTo: '/alumnos', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsModule { }
