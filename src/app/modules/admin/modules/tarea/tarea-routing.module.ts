import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaCreateComponent } from './pages/tarea-create/tarea-create.component';

const routes: Routes = [
  {
    path: '',
    component: TareaCreateComponent,
  },
  {
    path: 'create',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRoutingModule { }
