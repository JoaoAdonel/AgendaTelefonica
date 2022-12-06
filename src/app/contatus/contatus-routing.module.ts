import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatusPage } from './contatus.page';

const routes: Routes = [
  {
    path: '',
    component: ContatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatusPageRoutingModule {}
