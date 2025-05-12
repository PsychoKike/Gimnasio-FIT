import { Component } from '@angular/core';
import { EditUsersHijoComponent } from '../edit-users-hijo/edit-users-hijo.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-users-padre',
  imports: [EditUsersHijoComponent],
  templateUrl: './edit-users-padre.component.html',
  styleUrl: './edit-users-padre.component.css'
})
export class EditUsersPadreComponent {
// Arreglo de registros del localStorage
registros: any[] = [];
auxiliar: any[] = [];
  constructor(private router:Router){}

  ngOnInit(): void {
  const todos = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
  this.auxiliar=todos[todos.length-1]; //Obtiene el ultimo
  this.registros = todos.slice(0, -1); // todos menos el último
    if (this.registros.length === 0) {
        Swal.fire({
          title: 'No hay datos que mostrar',
          text: 'Redirigiendo al inicio y cerrando',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        }).then(()=>{
          this.router.navigate(['/home']).then(() => {
            location.reload();
          });
        });// Cambia '/' por tu ruta de home si es diferente
    }
  }

  actualizarRegistro(index: number, nuevoRegistro: any) {
    this.registros[index] = nuevoRegistro;
    
    const nuevosDatos = [...this.registros, this.auxiliar]; // vuelve a agregar la sesión activa
    localStorage.setItem('InicioSesion', JSON.stringify(nuevosDatos));
  }

  eliminarRegistro(index: number) {
    this.registros.splice(index, 1);
    const nuevosDatos = [...this.registros, this.auxiliar]; // vuelve a agregar la sesión activa
    localStorage.setItem('InicioSesion', JSON.stringify(nuevosDatos));
    this.router.navigate(['/EditarUsers']).then(() => {
            location.reload();
    });
  }
}



