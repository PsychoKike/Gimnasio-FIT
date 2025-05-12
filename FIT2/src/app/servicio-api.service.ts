import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }

 
  retornar() {
    return this.http.get("https://kkyaaa.free.beeceptor.com/").pipe(take(1));
  }
}
