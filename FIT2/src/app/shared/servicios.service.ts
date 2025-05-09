import { Injectable } from '@angular/core';
import { MISSERV } from '../MisServicios';
import { Servicio } from '../Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private servicio:Servicio[]=MISSERV;

  constructor() { }

  getServicio():Servicio[]{
    return this.servicio;
  }

  getInstructot(index:number):Servicio{
    return this.servicio[index];
  }
 
}
