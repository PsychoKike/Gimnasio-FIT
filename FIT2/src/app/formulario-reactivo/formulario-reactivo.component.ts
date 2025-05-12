import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidarFecha } from './CalendarioVer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
  ],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css',
  encapsulation: ViewEncapsulation.None 
})


export class FormularioReactivoComponent {
  opc = [
    { value: '1', label: 'Administrador' },
    { value: '2', label: 'Entrenador' },
    { value: '3', label: 'Usuario' }
  ];

  usuarios = [
    {correo:'Enrique@FIT.com', contraseña:'Pickote117'},
    {correo:'Christian@FIT.com',contraseña:'Tiburoncin22'},
    {correo: 'JoseKeoPension@FIT.com',contraseña:'Almohada66'}
  ];

  constructor(private Rout:Router){

  }

  FormularioReact = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
    ]),
    contraseña: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    OpcionArray: new FormControl('', [
      Validators.required
    ]),
    Calendario: new FormControl('', [
      Validators.required,
      ValidarFecha
    ])
  });



  Subir(){
    let historial = JSON.parse(localStorage.getItem('InicioSesion') || '[]');
    if(this.FormularioReact.valid){

      const DatosForm=this.FormularioReact.value;
      const email=DatosForm.correo;
      const contraseña=DatosForm.contraseña;
      const opc=DatosForm.OpcionArray;

      const EncUser=this.usuarios.some(i=>i.correo===email&&i.contraseña===contraseña);
       const UsuarioLogueado={
          correo:email,
          opc:opc,
          fecha:DatosForm.Calendario,
          Flag:true
        };
        historial.push(UsuarioLogueado);
        localStorage.setItem('InicioSesion',JSON.stringify(historial));
      if(EncUser&&opc=='1'){
        Swal.fire({
          title: 'Inicio de sesion exitoso',
          text: 'Bienvenido '+email,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(()=>{
          this.Rout.navigate(['/home']).then(() => {
            location.reload();
          });
        });
      }else{
          Swal.fire({
            title: 'Error',
            text: 'Email o contraseña erroneos',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
      }
    }
  }
}
