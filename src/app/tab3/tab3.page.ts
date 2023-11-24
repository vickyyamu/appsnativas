import { ChangeDetectorRef, Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public qrCodeData: string= ""
  public qrCodeDownloadLink: SafeUrl= ""

  constructor(
    public cartService:CartService,private cdr: ChangeDetectorRef) {
      this.qrCodeData= 'https://appsnativas.vercel.app/carritos-realizados/234823758294'
    }

    onChangeUrl(url: SafeUrl){
      this.qrCodeDownloadLink=url
    }
    crearMensaje() :string{
      
      return 'https://appsnativas.vercel.app/carritos-realizados/234823758294'
    
    }
    
      public mensajeConfirmar = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'Confirmar',
        role: 'confirm',
        handler: () => {
          
        },
      },
    ];
    public mensajeVaciar = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'Vaciar',
        role: 'confirm',
        handler: () => {
          this.cartService.vaciarCarrito()
        },
      },
      
    ];
    

    generateQR(): string {
      let cartItems: string| null = localStorage.getItem('carrito');
      
      if (cartItems && typeof cartItems === 'string') {
        
        try {
          let cartArray: Object[] = JSON.parse(cartItems);
          
          let createdCart: Object[] = cartArray.map((item: any)=>{
            // return {cantidad: item.cantidad, nombre: item.producto.nombre, precio: item.producto.precio}
            return item.producto.nombre
          })
                    
          let cartString: string = encodeURIComponent(JSON.stringify(createdCart));
          let url: string = `https://appsnativas.vercel.app/carritos-realizados/${cartString}`
          console.log(url)

          return url;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          return 'Error generating QR code';
        }
      } else {
        return 'No cart data found';
      }
    }
  

  
}



