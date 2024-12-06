import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // GET para obtener los usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST para agregar un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
