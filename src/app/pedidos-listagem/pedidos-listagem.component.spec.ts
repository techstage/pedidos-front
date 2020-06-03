import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListagemComponent } from './pedidos-listagem.component';

describe('PedidosListagemComponent', () => {
  let component: PedidosListagemComponent;
  let fixture: ComponentFixture<PedidosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
