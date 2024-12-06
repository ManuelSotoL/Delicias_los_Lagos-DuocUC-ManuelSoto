import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; // libreria Ionic Core, para controlar el menu lateral, permite abrir y cerrar la interfaz
import { AlertController } from '@ionic/angular'; // libreria Ionic Core, retroalimentacion visual para el usuario
import { ServicioDBService } from '../services/servicio-db.service'; // servicio de almacenamiento de informacion ingresada por el usuario

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'], 
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  email: string = '';
  password: string = '';
  tipo_cliente: string = '';
  primera_compra: string = '';
  registroStatus: string = '';

  constructor(private alertController: AlertController, private menu: MenuController, private servicioDBService: ServicioDBService ) { }

  async ngOnInit() {
    await this.servicioDBService.initDB();
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

    async guardar() { 
    if (this.nombre.trim() === '' || this.apellido.trim() === '' || this.usuario.trim() === '' || this.email.trim() === '' || this.tipo_cliente.trim() === '' || this.password.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.presentAlert('Su Nombre es: ' +this.nombre + ' ' + this.apellido + ' ' + ' ' + 'Usuario: ' + this.usuario + ' ' + ' Su Correo: ' + this.email + ' ' + ' '+ 'Tipo Cliente: ' + this.tipo_cliente
      + ' ' + ' Su Contraseña es: ' + ' ' + this.password
      ); 
    await this.register();
    }
  }
  async register() {
    try {
      await this.servicioDBService.registerUser(
        this.nombre,
        this.apellido,
        this.usuario,
        this.email,
        this.password,
        this.tipo_cliente,
        this.primera_compra
      );
      this.presentAlert('El registro fue exitoso.');
    } catch (error) {
      this.presentAlert('Hubo un problema al registrar al Cliente.');
      console.error('Error en register:', error);
    }
  }
  
}  