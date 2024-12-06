import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/apicompras.service';  // Importar el servicio
import { ProductoComprado } from '../services/apicompras.service'; // Importar la interfaz ProductoComprado

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: ProductoComprado[] = [];  // Lista para almacenar los productos

  constructor(private productoService: ProductoService) {}  // Inyectar el servicio

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
      id: 0,  // Esto debería ser generado automáticamente en la base de datos
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
