import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastro } from './cadastro';

describe('Cadastro', () => {
  let component: PageCadastro;
  let fixture: ComponentFixture<PageCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
