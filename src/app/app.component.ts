import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioDBService } from './services/servicio-db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private menu: MenuController,
    private router: Router,
    private servicioDB: ServicioDBService
  ) {}

  async ngOnInit() {
    try {
      await this.servicioDB.initDB();
      console.log('Base de datos inicializada correctamente en AppComponent.');
    } catch (error) {
      console.error('Error inicializando la base de datos desde AppComponent:', error);
    }
  }

  cerrarSesion() {
    console.log('Sesión cerrada');
    this.menu.close('mainMenu');
    this.router.navigate(['/login']);
  }
}
