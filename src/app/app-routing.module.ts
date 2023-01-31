import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AgendaComponent } from './features/agenda/agenda.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agenda',
    pathMatch: 'full'
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
