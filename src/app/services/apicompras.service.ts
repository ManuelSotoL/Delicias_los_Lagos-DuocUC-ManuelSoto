import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductoComprado {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApicomprasService { 
  private apiUrl = 'http://127.0.0.1:8000/miscompras/';

  constructor(private http: HttpClient) {}

  // Método GET para obtener productos
  obtenerProductos(): Observable<ProductoComprado[]> {
    return this.http.get<ProductoComprado[]>(`${this.apiUrl}/miscompras/`);
  }

  // Método POST para crear productos
  crearProducto(producto: ProductoComprado): Observable<ProductoComprado> {
    return this.http.post<ProductoComprado>(`${this.apiUrl}/miscompras/`, producto);
  }
  // http://127.0.0.1:8000/miscompras/
}
