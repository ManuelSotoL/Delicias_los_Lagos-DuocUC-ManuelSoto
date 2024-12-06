import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  users: any[] = [];
  nuevoContacto = { name: '', email: '' }; // Datos del nuevo contacto

  constructor(private apiService: ApiService, private menu: MenuController, private alertController: AlertController) { }

  ngOnInit() {

    this.menu.close("mainMenu");
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data; // guarda datos en una variable
      },
      (error) => {
        this.mostrarAlerta(error);
        console.error('Error al obtener los contactos:', error);
      }
    );
  }

  // fn para agregar un nuevo Contacto
  agregarContacto() {
    this.apiService.addUser(this.nuevoContacto).subscribe(
      (response) => {
        this.mostrarAlerta('Contacto agregado:' + response);
        this.users.push(response); // agrega el nuevo usuario a la lista
        this.nuevoContacto = { name: '', email: '' }; // limpia el formulario
      },
      (error) => {
        this.mostrarAlerta(error);
        console.error('Error al agregar el contacto:', error);
      }
    );
  }
  //alerta sobre el stock del producto
  async mostrarAlerta(mensaje: any) {
    const alert = await this.alertController.create({
      header: 'Mi app',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}