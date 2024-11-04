import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor() { }

  images: string[] = [
  '/assets/img/productos/chocolate1.png',
  '/assets/img/productos/chocolate2.png',
  '/assets/img/productos/chocolate3.png',
  '/assets/img/productos/chocolate4.png',
  '/assets/img/productos/chocolate5.png',
  '/assets/img/productos/chocolate6.png',
  '/assets/img/productos/chocolate7.png',
  '/assets/img/productos/chocolate8.png',
  '/assets/img/galeria/galeria1.png',
  '/assets/img/galeria/galeria2.png',
  '/assets/img/galeria/galeria3.png',
  '/assets/img/galeria/galeria4.png',
  '/assets/img/galeria/galeria5.png',
  '/assets/img/galeria/galeria6.png',
  '/assets/img/galeria/galeria7.png',
  ];















  ngOnInit() {
  }

}
