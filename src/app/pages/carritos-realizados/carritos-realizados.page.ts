import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/interfaces/constants/categoria';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-carritos-realizados',
  templateUrl: './carritos-realizados.page.html',
  styleUrls: ['./carritos-realizados.page.scss'],
})
export class CarritosRealizadosPage {

  productosEncontrados: Producto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, 
   public cartService:CartService
    ){
      activatedRoute.params.subscribe(params => {
        let cartArray: Object[] = JSON.parse(params['id']);
        cartArray.map((item: any)=>{
          console.log(item);
          
          this.buscarProducto(item);
        })
      })
    }
    
    cantidad=1;
  producto:Producto = {
    imagen: 'kkkk',
    nombre: 'nombre producto',
    descripcion: 'desccripcion',
    precio: 500
  }
buscarProducto(nombreProductoABuscar:string){
  CATEGORIAS
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoriaActual = CATEGORIAS[i];
    for (let j = 0; j < categoriaActual.productos.length; j++) {
      const productoActual = categoriaActual.productos[j];
      console.log('Buscando: ', nombreProductoABuscar);
      
      if(productoActual.nombre === nombreProductoABuscar){
        console.log('encontrado')
        this.producto = productoActual;
        this.productosEncontrados.push(productoActual);
      }
     
      
    }
    
  }
}

}
