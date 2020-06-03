import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedidos-listagem',
  templateUrl: './pedidos-listagem.component.html',
  styleUrls: ['./pedidos-listagem.component.css']
})
export class PedidosListagemComponent implements OnInit {

  pedidos: Array<any>;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pedidoService.listar().subscribe(dados => this.pedidos = dados);
  }

}
