import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // maneja la navegacion entre paginas
import { AlertController } from '@ionic/angular'; // proporciona retroalimentacion del usuario mediante alertas
import { ServicioDBService } from '../services/servicio-db.service'; // maneja la autenticacion del usuario a travez del metodo validateUser()

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController, private servicioDBService: ServicioDBService ) { }

  async ngOnInit() {
    try {
      await this.servicioDBService.initDB();
      console.log('Base de datos inicializada correctamente en login.page.ts.');
    } catch (error) {
      console.error('Error inicializando la base de datos en login.page.ts:', error);
      this.mostrarAlerta('Error al iniciar la base de datos.');
    }
  }


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


  validarEmail(email: string): boolean { // valida el formato del correo electronico mediante una expresion regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async login() { // esta fn utiliza validateUser desde el servicioDBservice
    if (!this.email.trim()) {
      this.mostrarAlerta('El campo de correo no puede quedar vacio.');
      return;
  }

  if (!this.validarEmail(this.email)) {
    this.mostrarAlerta('El formato del correo no corresponde.');
    return;
  }

  if (!this.password.trim()) {
    this.mostrarAlerta('El campo de contraseña no puede quedar vacio.');
    return;
  }

    if (this.password.length > 4) {
      this.mostrarAlerta('La contraseña no puede tener mas de 4 digitos.');
      return;
    }

    try {
      const isAuthenticated = await this.servicioDBService.validateUser(this.email, this.password);
      if (isAuthenticated) {
        this.navCtrl.navigateForward(['/home']);
      } else {
        this.mostrarAlerta('Correo o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.mostrarAlerta('Hubo un problema al conectar con la base de datos.');
    }
  }
registro()
  {
    this.navCtrl.navigateForward(['/registro']);
  }
}