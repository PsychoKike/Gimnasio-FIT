import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from '../Servicio';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicioApiService } from '../servicio-api.service';

@Component({
  selector: 'app-instructor',
  imports: [RouterLink],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent implements OnInit {
  instructor: any;

  constructor(
    private route: ActivatedRoute,
    public servicioApiService: ServicioApiService
  ) {}
  array:any = [];

  ngOnInit(): void {
    console.log("Entre");
    this.servicioApiService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)},
    });

}
successRequest(data: any): void {
    console.log(data);
    this.array = data.gymServices;
    this.instructor = this.array.find((item: any) => item.id === Number(this.route.snapshot.paramMap.get('id'))+1);
    console.log(this.instructor);
}
}

