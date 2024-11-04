import { Component, OnInit } from '@angular/core'; 
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'] 
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  
  productos = [
    {
      nombre: 'Chocolate Relleno',
      precio: '$25.000',
      imagen: '/assets/img/productos/chocolate1.png'
    },
    {
      nombre: 'Chocolate Suizo',
      precio: '$15.000',
      imagen: '/assets/img/productos/chocolate2.png'
    },
    {
      nombre: 'Chocolate Maziso',
      precio: '$20.000',
      imagen: '/assets/img/productos/chocolate3.png'
    },
    {
      nombre: 'Torta Chocolate Almendra',
      precio: '$55.000',
      imagen: '/assets/img/productos/chocolate4.png'
    },
    {
      nombre: 'Chocolate Trufa Blanca',
      precio: '$35.000',
      imagen: '/assets/img/productos/chocolate5.png'
    },
    {
      nombre: 'Caja de Chocolates Mixtos',
      precio: '$40.000',
      imagen: '/assets/img/productos/chocolate6.png'
    },
    {
      nombre: 'Chocolates San Valentin',
      precio: '$60.000',
      imagen: '/assets/img/productos/chocolate7.png'
    },
  ];

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}