import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarrypoterRoutingModule } from './harrypoter-routing.module';
import { HarrypoterComponent } from './harrypoter.component';


@NgModule({
  declarations: [
    HarrypoterComponent
  ],
  imports: [
    CommonModule,
    HarrypoterRoutingModule
  ]
})
export class HarrypoterModule { }
