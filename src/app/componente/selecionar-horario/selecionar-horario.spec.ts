import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarHorario } from './selecionar-horario';

describe('SelecionarHorario', () => {
  let component: SelecionarHorario;
  let fixture: ComponentFixture<SelecionarHorario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarHorario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarHorario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
