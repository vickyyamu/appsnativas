import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritosRealizadosPageRoutingModule } from './carritos-realizados-routing.module';
import { CarritosRealizadosPage } from './carritos-realizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritosRealizadosPageRoutingModule
  ],
  declarations: [CarritosRealizadosPage]
}) 
export class  CarritosRealizadosPageModule{}
