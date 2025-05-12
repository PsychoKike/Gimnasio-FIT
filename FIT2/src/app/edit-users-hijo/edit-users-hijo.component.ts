import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-users-hijo',
  imports: [FormsModule],
  templateUrl: './edit-users-hijo.component.html',
  styleUrl: './edit-users-hijo.component.css'
})
export class EditUsersHijoComponent {
  @Input() registro: any;
  @Input() index!: number;

  @Output() eliminar = new EventEmitter<number>();
  @Output() actualizar = new EventEmitter<any>();

  editando = false;
  nuevoCorreo: string = '';
  nuevoNombre: string = '';
  nuevaFecha: string = '';

  ngOnInit():void{
    this.nuevoCorreo = this.registro.correo;
    this.nuevoNombre=this.registro.nombre;
    this.nuevaFecha=this.registro.fecha;
  }

  toggleEditar() {
    this.editando = !this.editando;
    if (this.editando) {
      this.nuevoCorreo = this.registro.correo;
      this.nuevoNombre=this.registro.nombre;
      this.nuevaFecha=this.registro.fecha;
    }
  }

  guardarCambios() {
    const nuevoRegistro = { ...this.registro, correo: this.nuevoCorreo, nombre:this.nuevoNombre, fecha:this.nuevaFecha};
    this.actualizar.emit(nuevoRegistro);
    this.editando = false;
  }

  eliminarRegistro() {
    this.eliminar.emit(this.index); // ⚠️ Asegura que se emite el índice correcto
  }
}
