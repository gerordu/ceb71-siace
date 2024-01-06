import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { SemesterDetailsComponent } from './pages/semester-details/semester-details.component';
import { CicleDetailsComponent } from './pages/cicle-details/cicle-details.component';
import { CreateComponent } from './pages/create/create.component';
import { ComplexUrlMatcher } from '../shared/functions/complex-url-matcher';
import { ConsultComponent } from './pages/consult/consult.component';

const routes: Routes = [
  { path: 'consulta', component: ConsultComponent }, // lista
  { path: 'crear', component: CreateComponent },
  { matcher: ComplexUrlMatcher('cicle', /^(20[0-9]{2}-20[0-9]{2})$/gm), children: [
    { path: '', component: CicleDetailsComponent },
    { matcher: ComplexUrlMatcher('semester', /^[a|b]$/gm), component: SemesterDetailsComponent }, // ver
  ]},
  { path: '**', redirectTo: '/ciclos/consulta', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CiclesModule { }


