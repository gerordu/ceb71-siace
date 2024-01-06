import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './pages/summary/summary.component';
import { LogosComponent } from './pages/logos/logos.component';
import { InformationComponent } from './pages/information/information.component';
import { LogsComponent } from './pages/logs/logs.component';

const routes: Routes = [
  { path: 'resumen', component: SummaryComponent },
  { path: 'logos', component: LogosComponent },
  { path: 'datos', component: InformationComponent },
  { path: 'actividades', component: LogsComponent },
  { path: '**', redirectTo: '/plataforma/resumen', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlatformModule { }
