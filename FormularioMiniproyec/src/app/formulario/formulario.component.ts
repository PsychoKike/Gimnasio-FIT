import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Cliente {
  nombre: string;
  edad: number;
  membresia: string;
  actividades: string[];
  genero: string;
  fechaRegistro: string;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre = '';
  edad = 10;
  membresia = '';
  actividades: string[] = [];
  genero = '';
  fechaRegistro = '';

  clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');

  agregarCliente(): void {
    if (!this.nombre || !this.edad || !this.membresia || !this.genero || !this.fechaRegistro) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (this.edad < 10 || this.edad > 100) {
      alert('La edad debe estar entre 10 y 100 años.');
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
    alert('Cliente agregado correctamente.');
  }

  borrarFormulario(): void {
    this.nombre = '';
    this.edad = 10;
    this.membresia = '';
    this.actividades = [];
    this.genero = '';
    this.fechaRegistro = '';
  }
}
