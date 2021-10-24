import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleComponent } from './capsule/capsule.component';
import { CoresComponent } from './cores/cores.component';
import { NasaComponent } from './nasa/nasa.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  {
    path: '',
    component: NasaComponent,
    children: [
      { path: 'capsule', component: CapsuleComponent },
      { path: 'cores', component: CoresComponent },
      { path: 'ships', component: ShipsComponent },
      { path: '', redirectTo: '/nasa-components/capsule', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasaComponentsRoutingModule {}
