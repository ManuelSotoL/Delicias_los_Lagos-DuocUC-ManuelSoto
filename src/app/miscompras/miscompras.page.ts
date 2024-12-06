import { Component, OnInit } from '@angular/core';
import { ApicomprasService } from '../services/apicompras.service';  
import { ProductoComprado } from '../services/apicompras.service'; 

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.page.html',
  styleUrls: ['./miscompras.page.scss'] 
})
export class MiscomprasPage implements OnInit {
  productos: ProductoComprado[] = [];  // Lista para almacenar los productos

  constructor(private productoService: ApicomprasService) {}  // Inyectar el servicio

  ngOnInit(): void {
    this.obtenerProductos();  // Llamar a la función para obtener productos al inicializar el componente
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      (data) => {
        this.productos = data;  // Asignar los productos obtenidos a la lista
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  crearProducto(): void {
    const nuevoProducto: ProductoComprado = {
      id: 0,  
      nombre: 'Producto Ejemplo',
      precio: 100,
      cantidad: 10
    };
    this.productoService.crearProducto(nuevoProducto).subscribe(
      (producto) => {
        console.log('Producto creado:', producto);
        this.obtenerProductos();  // Volver a cargar la lista de productos
      },
      (error) => {
        console.error('Error al crear producto:', error);
      }
    );
  }
}



