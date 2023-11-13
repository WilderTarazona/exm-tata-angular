import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './pages/home/home.component';
import { TataAuthenticationGuard } from '@tata/commons/guards';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [TataAuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'task',
        loadChildren: () =>
          import('./modules/tarea/tarea.module').then((m) => m.TareaModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
