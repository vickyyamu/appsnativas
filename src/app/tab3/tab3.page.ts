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
          this.realizarPedido()
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


  

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.qrCodeData= this.crearMensaje();
    this.cdr.detectChanges();
  }
}



