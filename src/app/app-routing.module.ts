import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { NasaComponent } from './nasa-components/nasa/nasa.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'nasa', component: NasaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'nasa',
    loadChildren: () =>
      import('./nasa-components/nasa-components.module').then(
        (m) => m.NasaComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routesNavigation = [HomeComponent, NavComponent, NasaComponent];
