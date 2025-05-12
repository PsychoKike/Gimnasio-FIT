import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editclientes-hijo',
  imports: [FormsModule],
  templateUrl: './editclientes-hijo.component.html',
  styleUrl: './editclientes-hijo.component.css'
})
export class EditclientesHijoComponent {
    @Input() registro: any;
  @Input() index: number = 0;
  @Output() actualizar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<number>();

  editando: boolean = false;

  // Variables para editar
  nuevoNombre: string = '';
  nuevaEdad: number = 0;
  nuevoGenero: string = '';
  nuevaMembresia: string = '';
  nuevaActividad: string = '';
  nuevaFechaRegistro: string = '';

  ngOnInit() {
    this.nuevoNombre = this.registro.nombre;
    this.nuevaEdad = this.registro.edad;
    this.nuevoGenero = this.registro.genero;
    this.nuevaMembresia = this.registro.membresia;
    this.nuevaActividad = this.registro.actividades;
    this.nuevaFechaRegistro = this.registro.fechaRegistro;
  }

  toggleEditar() {
    this.editando = !this.editando;
    if (!this.editando) {
      // Si cancela la edición, se restauran los valores originales
      this.nuevoNombre = this.registro.nombre;
      this.nuevaEdad = this.registro.edad;
      this.nuevoGenero = this.registro.genero;
      this.nuevaMembresia = this.registro.membresia;
      this.nuevaActividad = this.registro.actividades;
      this.nuevaFechaRegistro = this.registro.fechaRegistro;
    }
  }

  guardarCambios() {
    const actualizado = {
      ...this.registro,
      nombre: this.nuevoNombre,
      edad: this.nuevaEdad,
      genero: this.nuevoGenero,
      membresia: this.nuevaMembresia,
      actividades: this.nuevaActividad,
      fechaRegistro: this.nuevaFechaRegistro
    };
    this.actualizar.emit(actualizado); // Enviamos el cliente actualizado
    this.editando = false;
  }

  eliminarRegistro() {
    this.eliminar.emit(this.index); // Emitimos el índice del cliente a eliminar
  }
}
