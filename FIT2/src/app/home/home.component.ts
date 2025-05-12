import { Component } from '@angular/core';
import { Servicio} from '../Servicio';
import { ServiciosService } from '../shared/servicios.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    misServicios:Servicio[]=[];

    constructor(public Serv:ServiciosService){
    }

    ngOnInit():void{
      this.misServicios=this.Serv.getServicio();
      console.log(this.misServicios);

    }
}
