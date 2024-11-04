import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController ) { }

  ngOnInit() {
  }


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  login() {
    if (!this.email) {
      this.mostrarAlerta('El campo de correo no puede quedar vacio.');
      return;
  }

  if (!this.validarEmail(this.email)) {
    this.mostrarAlerta('El formato del correo no corresponde.');
    return;
  }

  if (!this.password) {
    this.mostrarAlerta('El campo de contraseña no puede quedar vacio.');
    return;
  }

    if (this.password.length > 4) {
      this.mostrarAlerta('La contraseña no puede tener mas de 4 digitos.');
      return;
    }

  this.navCtrl.navigateForward(['/home'], {
    queryParams: {
      email: this.email,
      password: this.password
    }
  });

}

registro()
{
  this.navCtrl.navigateForward(['/registro']);
}

}