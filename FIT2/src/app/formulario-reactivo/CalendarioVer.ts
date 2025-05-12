import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ValidarFecha(control: AbstractControl):ValidationErrors|null{
   const UsuarioIngreso=control.value;
   const fechaPasada:boolean=false;
   const domingoNoPermitido:boolean=false;
   //hace que no se dispare el aviso luego luego
   if(!UsuarioIngreso){
    return null;
   }

   //Aqui inicializa la fecha que el usuario coloco en el Calendario
   const Fecha=new Date(UsuarioIngreso);
   const hoy=new Date();
   console.log(UsuarioIngreso+Fecha);   

   Fecha.setHours(0,0,0,0); //Coloca 0 horas
   hoy.setHours(0,0,0,0); //Coloca 0 horas

  const Ayer = Fecha< hoy;
  const Domingo = Fecha.getDay() === 0;

  if (Ayer) return { fechaPasada: true };
  if (Domingo) return { domingoNoPermitido: true };
   
   return null;
}