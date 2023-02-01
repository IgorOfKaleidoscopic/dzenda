import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { SplashComponent } from './features/splash/splash.component';
import { AgendaComponent } from './features/agenda/agenda.component';
import { PocComponent } from './features/poc/poc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'poc',
    component: PocComponent
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
