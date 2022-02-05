import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarrypoterComponent } from './harrypoter.component';

const routes: Routes = [{ path: '', component: HarrypoterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarrypoterRoutingModule { }
