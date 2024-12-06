import { Component, OnInit } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private menu: MenuController) { }

  // Coordenadas del Negocio Delicias los Lagos
  latitude: number = -33.32639330306522;
  longitude: number = -70.76619180018878;

  ngOnInit() {
    this.menu.close("mainMenu");
    this.getLocationAndShowOnMap();
  }

  async getLocationAndShowOnMap() {
    try {
      const permissions: PermissionStatus = await Geolocation.checkPermissions();

      if (permissions.location !== 'granted') {
        const requestPermissions = await Geolocation.requestPermissions();
        if (requestPermissions.location !== 'granted') {
          alert('Permiso de ubicación denegado');
          return;
        }
      }
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      const mapFrame: HTMLIFrameElement | null = document.getElementById(
        'mapFrame'
      ) as HTMLIFrameElement;

      if (mapFrame) {
        mapFrame.src = `https://www.google.com/maps?q=${this.latitude},${this.longitude}&output=embed`;
      }
    } catch (error) {
      alert('Error al obtener la ubicación: ' + error);
    }
  }

}