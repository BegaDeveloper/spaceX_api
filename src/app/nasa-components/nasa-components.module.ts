import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaComponentsRoutingModule } from './nasa-components-routing.module';
import { CoresComponent } from './cores/cores.component';
import { CapsuleComponent } from './capsule/capsule.component';
import { ShipsComponent } from './ships/ships.component';

@NgModule({
  declarations: [CoresComponent, CapsuleComponent, ShipsComponent],
  imports: [CommonModule, NasaComponentsRoutingModule],
})
export class NasaComponentsModule {}
