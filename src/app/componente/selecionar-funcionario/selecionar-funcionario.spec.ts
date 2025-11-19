import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarFuncionario } from './selecionar-funcionario';

describe('SelecionarFuncionario', () => {
  let component: SelecionarFuncionario;
  let fixture: ComponentFixture<SelecionarFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarFuncionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
