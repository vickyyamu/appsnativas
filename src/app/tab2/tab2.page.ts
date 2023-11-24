import { Component } from '@angular/core';

import { CATEGORIAS } from '../core/interfaces/constants/categoria';
import { NavController } from '@ionic/angular';
import { Categoria } from '../core/interfaces/categoria';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categorias:Categoria[] = CATEGORIAS
  isLiked = false;

  constructor(private navCtrl:NavController) {}
  
  
  appRecomendada: Categoria | undefined;
  mostrarDiv: boolean = false;
  rojo:boolean = false
  verde:boolean = false

  obtenerRecomendacionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.categorias.length);
    this.appRecomendada = this.categorias[indiceAleatorio];
  
      this.mostrarDiv = !this.mostrarDiv;
     
  }

  apretarMg() {
      this.verde = !this.verde;
      if (this.verde) {
        this.rojo = false;
      }
  }

  descargarApp(id:Number){

    this.navCtrl.navigateForward(`/descargar-app/${id}`);

  }

}
