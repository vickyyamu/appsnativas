import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CarritosRealizadosPage } from './carritos-realizados.page';

const routes: Routes = [
  {
    path: '',
    component: CarritosRealizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritosRealizadosPageRoutingModule {}
