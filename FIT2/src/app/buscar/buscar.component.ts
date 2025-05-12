import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServicioApiService } from '../servicio-api.service';

@Component({
  selector: 'app-buscar',
  imports: [RouterModule],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  nombre: string = '';
  resultados: any[] = [];
  cargando: boolean = false;
  error: string = '';
  instructor: any = null;

  constructor(
    private servicioApi: ServicioApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre') || '';
      if (this.nombre) {
        this.onBuscar(); 
      }
    });
  }

  onBuscar() {
    if (this.nombre.trim()) {
      this.cargando = true;
      
      this.servicioApi.retornar().subscribe(
        (data: any) => {
          this.resultados = data.gymServices.filter((servicio: any) =>
            servicio.instructor.toLowerCase().includes(this.nombre.toLowerCase())
          );
          console.log("entre");
          this.instructor = this.resultados.length ? this.resultados[0] : null;
          this.cargando = false;
          this.error = this.resultados.length ? '' : 'No se encontraron resultados.';
        },
        (err) => {
          this.error = 'Error al realizar la búsqueda';
          this.cargando = false;
        }
      );
    } else {
      this.error = 'Por favor ingrese un nombre';
    }
  }
}
