import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';

const routes: Routes = [
  { path: 'gameofthrones', loadChildren: () => import('./gameofthrones/gameofthrones.module').then(m => m.GameofthronesModule) }, 
  { path: 'harrypoter', loadChildren: () => import('./harrypoter/harrypoter.module').then(m => m.HarrypoterModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
