import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioSesionService } from '../shared/inicio-sesion.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  correo!: string;
  FlagInicio: boolean = false;

  constructor(private sessionService: InicioSesionService) {}

  ngOnInit(): void {
    // Nos suscribimos al estado de la sesión
    this.sessionService.getSessionState().subscribe(flag => {
      this.FlagInicio = flag;
      // Recuperamos el correo solo si hay sesión
      if (flag) {
        const historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
        this.correo = historial[historial.length - 1].correo;
      }
    });
  }

  cerrarSesion(): void {
    this.sessionService.updateSessionState(false); // Actualizamos el estado de la sesión en el servicio
    this.correo = ''; // Limpiamos el correo
  }
}
