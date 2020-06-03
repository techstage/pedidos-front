import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidosURL = 'http://localhost:9010/pedidos';

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get<any[]>(`${this.pedidosURL}`);
  }

}
