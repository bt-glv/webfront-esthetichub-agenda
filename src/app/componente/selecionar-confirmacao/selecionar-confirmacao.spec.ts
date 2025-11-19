import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarConfirmacao } from './selecionar-confirmacao';

describe('SelecionarConfirmacao', () => {
  let component: SelecionarConfirmacao;
  let fixture: ComponentFixture<SelecionarConfirmacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarConfirmacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarConfirmacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
