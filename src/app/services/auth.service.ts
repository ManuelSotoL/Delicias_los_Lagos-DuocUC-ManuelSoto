import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor() { }

    // fn para verificar si el usuario es autenticado
    isAuthenticated(): boolean {
        const token = localStorage.getItem('auth_token');
        return !!token;  // Devuelve true si hay un token presente
    }

    // fn para iniciar sesion
    login(token: string): void {
        localStorage.setItem('auth_token', token);
    }

    // fn para cerrar sesion
    logout(): void {
        localStorage.removeItem('auth_token');
    }
}
