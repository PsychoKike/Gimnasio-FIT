import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';


interface Cliente {
  nombre: string;
  edad: number;
  membresia: string;
  actividades: string[];
  genero: string;
  fechaRegistro: string;
}

@Component({
  selector: 'app-servicios-fit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './servicios-fit.component.html',
  styleUrl: './servicios-fit.component.css'
})
export class ServiciosFITComponent {
  nombre = '';
  edad = 15;
  membresia = '';
  actividades: string[] = [];
  genero = '';
  fechaRegistro = '';
  clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');
  fechaActual: string | undefined;

  ngOnInit(): void {
    const hoy = new Date();
    this.fechaActual = hoy.toISOString().split('T')[0];
  }

  mostrarMensaje(titulo: string, texto: string, icono: 'success' | 'error'): void {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
      confirmButtonText: 'Aceptar'
    });
  }

  agregarCliente(): void {
    if (!this.nombre) {
      this.mostrarMensaje('Error', '¡Por favor coloca tu nombre.!', 'error');
      return;
    }
    if (this.edad < 15 || this.edad > 100) {
      this.mostrarMensaje('Error', '¡¡La edad debe estar entre 15 y 100 años.!!', 'error');
      return;
    }

    if(!this.actividades.length) {
      this.mostrarMensaje('Error', '¡Por favor selecciona al menos una actividad!', 'error');
      return; 
    }


    if (!this.membresia) {
      this.mostrarMensaje('Error', 'Por favor coloca la membresia que deseas.', 'error');
      return;
    }

    if (!this.genero) {
      this.mostrarMensaje('Error', '!Por favor selecciona tu genero!', 'error');
      return;
    }

    if (!this.fechaRegistro) {
      this.mostrarMensaje('Error', '¡¡Por favor colooca la fecha de tu registro.!!', 'error');
      return;
    }
    const [year, month, day] = this.fechaRegistro.split('-').map(Number);
    const fecha = new Date(year, month - 1, day);
    const diaSemana = fecha.getDay();
    if (diaSemana === 0) {
      this.mostrarMensaje('Error', 'No se puede registrar un cliente en domingo.', 'error');
      return;
    }

    const nuevoCliente: Cliente = {
      nombre: this.nombre,
      edad: this.edad,
      membresia: this.membresia,
      actividades: this.actividades,
      genero: this.genero,
      fechaRegistro: this.fechaRegistro
    };

    this.clientes.push(nuevoCliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    this.borrarFormulario();
    this.mostrarMensaje('Éxito', 'Cliente agregado correctamente.', 'success');
  }

  borrarFormulario(): void {
    this.nombre = '';
    this.edad = 15;
    this.membresia = '';
    this.actividades = [];
    this.genero = '';
    this.fechaRegistro = '';
  }
}
