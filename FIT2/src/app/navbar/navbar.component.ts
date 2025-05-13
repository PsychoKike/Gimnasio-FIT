import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BuscarComponent } from '../buscar/buscar.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  RecUser: any = null;
  correo!: string;
  FlagInicio: boolean=false;

  logo = "FITLOGO.png";

  constructor(private router: Router) { }
  buscarinstructor(nombre: string) {
    this.router.navigate(['/buscar', nombre]);
  }



ngOnInit(): void {
  const historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
  this.RecUser = historial[historial.length - 1]; 
  this.correo = this.RecUser.correo;
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

navbarEstiloLogueado = {
  'background-color': '#4CAF50',  // Por ejemplo, verde cuando logueado
  'color': 'white'
};

navbarEstiloOriginal = {
  'background-color': '#f8f9fa',  // Color original del navbar
  'color': 'black'
};

}
