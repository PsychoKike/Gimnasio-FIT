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
  selector: 'app-servicios-fit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servicios-fit.component.html',
  styleUrl: './servicios-fit.component.css'
})
export class ServiciosFITComponent {
  nombre = '';
  edad = 10;
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

  agregarCliente(): void {
    if (!this.nombre || !this.edad || !this.membresia || !this.genero || !this.fechaRegistro) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (this.edad < 10 || this.edad > 100) {
      alert('La edad debe estar entre 10 y 100 años.');
      return;
    }

    const [year, month, day] = this.fechaRegistro.split('-').map(Number);
    const fecha = new Date(year, month - 1, day); 
    const diaSemana = fecha.getDay();
    if (diaSemana === 0) {
      alert('No se puede registrar un cliente en domingo.');
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
