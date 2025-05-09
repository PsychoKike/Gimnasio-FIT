import { Component, Input } from '@angular/core';
import { Servicio } from '../Servicio';
import { ServiciosService } from '../shared/servicios.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor',
  imports: [RouterLink],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent {
  @Input() instructor!:Servicio;
  constructor(public ServicioService:ServiciosService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.instructor=ServicioService.getInstructot(params['id']);
    })
  }
}
