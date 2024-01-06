import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { AssignComponent } from './pages/assign/assign.component';
import { ConsultComponent } from './pages/consult/consult.component';

const routes: Routes = [
  { path: 'consultar', component: ConsultComponent },
  { path: ':group/:subject', children: [
    { path: '', component: DetailsComponent },
    { path: 'asignar', component: AssignComponent },
  ]},
  { path: '**', redirectTo: '/calificaciones/consultar', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GradesModule { }
