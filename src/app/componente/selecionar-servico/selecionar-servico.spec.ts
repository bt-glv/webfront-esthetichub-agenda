import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarServico } from './selecionar-servico';

describe('SelecionarServico', () => {
  let component: SelecionarServico;
  let fixture: ComponentFixture<SelecionarServico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarServico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarServico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
