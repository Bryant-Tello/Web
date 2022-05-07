import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __be_insert(data: any) {
    return this.http.post<any>('https://localhost:44309/api/historialmedico/insert', data);
  }

  __be_listar_historial() {
    return this.http.get<any>('https://localhost:44309/api/historialmedico/listar');
  }

}
