import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PedidosListagemComponent } from './pedidos-listagem/pedidos-listagem.component';
import { PedidoService } from './pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    PedidosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PedidoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
