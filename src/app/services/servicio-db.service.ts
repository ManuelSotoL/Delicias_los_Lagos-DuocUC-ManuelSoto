import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'; 
//libreria para almacenar informacion de los usuarios y garantizar persistencia de datos


@Injectable({
  providedIn: 'root'
})
export class ServicioDBService {


private db!: SQLiteDBConnection;
readonly db_table: string = "registro";
readonly db_name: string = "deliciasloslagos.db";

private sqlite: SQLiteConnection;

private isInitialized: boolean = false;
constructor() {
  this.sqlite = new SQLiteConnection(CapacitorSQLite);
}

  async initDB() { // inicia la base de datos, generalmente es el primer metodo que se llama cuando la app ejecuta
    if(this.isInitialized) return;

    try {  
      // Crea la conexion a la base de datos
      this.db = await this.sqlite.createConnection(
        this.db_name,   
        false,          
        'no-encryption',
        1,              
        false           
      );

      await this.db.open();
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${this.db_table} (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        apellido TEXT,
        usuario TEXT,
        email TEXT UNIQUE,
        password TEXT,
        tipo_cliente TEXT,
        primera_compra TEXT
        );
      `;
      await this.db.execute(createTableQuery);
      this.isInitialized = true;
      console.log('Base de datos a iniciado');
    } catch (e) {
      console.error('Error al inicializar la base de datos', e);
    }
  }
        // metodo que guarda los datos del usuario durante el registro
  async registerUser(nombre: string, apellido: string, usuario: string, email: string, password: string, tipo_cliente: string, primera_compra: string ){
    try {
      if(!nombre || !apellido || !usuario || !email || !password || !tipo_cliente || !primera_compra ){
        alert('Por favor, Ingrese todos los campos');
        return
      }
      const inserQuery = `
      INSERT INTO ${this.db_table} (nombre, apellido, usuario, email, password, tipo_cliente, primera_compra) VALUES (?,?,?,?,?,?,?);
      `;
      const values = [nombre, apellido, usuario, email, password, tipo_cliente, primera_compra];
      await this.db.run(inserQuery, values);
      console.log('Cliente Registrado!')
      
    } catch (error) {
      console.error('Error al Registrarte!', error);
    }
  }

  async getUser(): Promise<any[]>{
    try {
        const SelectQuery=  `Select * from ${this.db_table};`;
        const res = await this.db.query(SelectQuery);
        return res.values? res.values : [];      
    } catch (error) {
      console.error("Error al Obtener los Clientes", error);
      return[]
    }
  }

  async deleteUser(id: number){
      try {
        const deletequery = `DELETE FROM ${this.db_table} WHERE id = ?;`;
        await this.db.run(deletequery, [id]);
        console.log("Cliente Eliminado");
      } catch (error) {
        console.error("Error al Eliminar un Cliente", error);
      }
  }

  async validateUser(email: string, password: string): Promise<boolean> {  
    try {
      const query = `SELECT * FROM ${this.db_table} WHERE email = ? AND password = ?;`;
      const result = await this.db.query(query, [email, password]);

      if (result && result.values && result.values.length > 0) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al validar las credenciales del usuario:', error);
      return false;
    }
  }
  
}