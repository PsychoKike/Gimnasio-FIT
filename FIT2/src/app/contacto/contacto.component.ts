import { Component } from '@angular/core';
import { creador } from './interfaceCread';
import { Creadores } from './interFaceCreadlleno';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  creadores: creador[] = Creadores;
}
