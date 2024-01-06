import { Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'inicio', component: DashboardComponent },
    { path: 'ingresar', component: LoginComponent },
    { path: 'alumnos', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
    { path: 'asignaturas', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) },
    { path: 'calificaciones', loadChildren: () => import('./grades/grades.module').then(m => m.GradesModule) },
    { path: 'ciclos', loadChildren: () => import('./cicles/cicles.module').then(m => m.CiclesModule) },
    { path: 'documentos', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },
    { path: 'grupos', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },
    { path: 'plataforma', loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule) },
    { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    // { path: 'usuarios', children: [
    //     { path: '/'}, // lista
    //     { path: 'nuevo'},
    //     { path: '/{usuario}'}, // ver
    //     { path: '/{usuario}/contrasena'},
    //     { path: '/{usuario}/capacidades'}
    // ]},
    // { path: 'alumnos', children: [
    //     { path: '/'}, // lista
    //     { path: 'registrar'},
    //     { path: '/{matricula}'}, // ver
    //     { path: '/{matricula}/asignar-grupo'},
    //     { path: '/{matricula}/calificaciones', children: [
    //         { path: '/' },
    //         { path: 'editar' },
    //     ]},
    // ]},
    // { path: 'asignaturas', children: [
    //     { path: '/'}, // lista
    //     { path: 'nuevo'},
    //     { path: '/{asignatura}'}, // ver
    //     { path: 'asignar-asignaturas'},
    //     { path: 'asignar-profesor'},
    //     { path: 'listas'}
    // ]},
    // { path: 'grupos', children: [
    //     { path: '/'}, // lista
    //     { path: 'nuevo'},
    //     { path: '/{asignatura}'}, // ver
    //     { path: 'asignar-asignaturas'},
    //     { path: 'asignar-profesor'},
    //     { path: 'listas'} // asistencia|calificaciones parciales
    // ]},
    // { path: 'calificaciones', children: [ // por grupos y asignaturas
    //     { path: 'mostrar'},
    //     { path: 'nuevo'},
    //     { path: 'editar'},
    //     { path: 'listas'}, // parciales|semestre|concentrado|no ordinarias
    // ]},
    // { path: 'ciclos', children: [
        // { path: '/'}, // lista
        // { path: 'nuevo'},
        // { path: '{ciclo[20XX-20XX]}'}, // ver
        // { path: '{ciclo[20XX-20XX]}/{semestre[A|B]}'} // ver
    // ]},
    // { path: 'plataforma', children: [
    //     { path: 'resumen'},
    //     { path: 'logos'},
    //     { path: 'datos'},
    //     { path: 'actividades'},
    // ]},
    { path: '**', component: NotFoundComponent }
];
