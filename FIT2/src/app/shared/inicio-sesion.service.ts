import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  private sessionSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Inicializamos el estado con el valor almacenado en localStorage
    const historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
    if (historial.length > 0) {
      this.sessionSubject.next(historial[historial.length - 1].Flag);
    }
  }

  // Método para obtener el estado actual de la sesión
  getSessionState() {
    return this.sessionSubject.asObservable();
  }

  // Método para actualizar el estado de la sesión
  updateSessionState(flag: boolean) {
    const historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
    if (historial.length > 0) {
      historial[historial.length - 1].Flag = flag; // Actualizamos el Flag en el localStorage
      localStorage.setItem('InicioSesion', JSON.stringify(historial));
      this.sessionSubject.next(flag); // Notificamos a los suscriptores sobre el cambio
    }
  }
}
