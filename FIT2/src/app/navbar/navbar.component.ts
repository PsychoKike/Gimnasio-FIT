import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  RecUser: any = null; // Esta variable nos ayudará a recuperar el usuario
  correo!: string;
  FlagInicio: boolean=false;

ngOnInit(): void {
  const historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
  this.RecUser = historial[historial.length - 1]; // Último usuario que inició sesión
  this.correo = this.RecUser.correo; // Aquí sí obtienes el correo correctamente
  this.FlagInicio=this.RecUser.Flag;
  console.log(this.FlagInicio,historial.length);

}

cerrarSesion():void{
  const historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
  historial[historial.length - 1].Flag=false;
  localStorage.setItem('InicioSesion',JSON.stringify(historial));
  this.FlagInicio=false;
  location.reload();
}

}
