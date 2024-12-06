import { Component, OnInit } from '@angular/core';
import { ServicioDBService } from '../services/servicio-db.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any = {};
  email: string = '';

  constructor(private servicioDBService: ServicioDBService) {}

  async ngOnInit() {
    try {
      await this.servicioDBService.initDB();
      console.log('Base de datos inicializada en PerfilPage.');

      // Obtener el usuario por email
      const users = await this.servicioDBService.getUser();
      this.user = users.find(u => u.email === this.email);
      
      if (!this.user) {
        console.error('Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al cargar el perfil del usuario:', error);
    }
  }
}
