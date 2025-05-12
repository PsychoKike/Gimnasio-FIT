import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditclientesHijoComponent } from '../editclientes-hijo/editclientes-hijo.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editclientes-padre',
  imports: [EditclientesHijoComponent],
  templateUrl: './editclientes-padre.component.html',
  styleUrl: './editclientes-padre.component.css'
})
export class EditclientesPadreComponent {
registros: any[] = [];
  constructor(private router:Router){}

  ngOnInit(): void {
  const todos = JSON.parse(localStorage.getItem('clientes') || '[]');
  this.registros = todos;
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
    localStorage.setItem('clientes', JSON.stringify(this.registros));
  }

  eliminarRegistro(index: number) {
    this.registros.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(this.registros));
    this.router.navigate(['/EditarUsers']).then(() => {
            location.reload();
    });
  }
}
