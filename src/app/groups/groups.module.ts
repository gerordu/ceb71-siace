import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { SubjectsAssignComponent } from './pages/subjects-assign/subjects-assign.component';
import { TeacherAssignComponent } from './pages/teacher-assign/teacher-assign.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: CreateComponent },
  { path: 'asignar-asignaturas', component: SubjectsAssignComponent },
  { path: 'asignar-profesor', component: TeacherAssignComponent },
  { path: ':asignatura', component: DetailsComponent },
  { path: '**', redirectTo: '/groups', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupsModule { }
