import { Component } from '@angular/core';
import { Servicio} from '../Servicio';
import { ServiciosService } from '../shared/servicios.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DomseguroPipe } from './domseguro.pipe';


@Component({
  selector: 'app-home',
  imports: [MatButtonModule,RouterLink, DomseguroPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  video:string="6rHuNVxoz08?si=RWIkisr2X32eNpV2";
    misServicios:Servicio[]=[];

    constructor(public Serv:ServiciosService){
      console.log("Constructor de heroes");
    }

    ngOnInit():void{
      console.log("ngOnInit de Heroes");
      this.misServicios=this.Serv.getServicio();
      console.log(this.misServicios);

    }


}
