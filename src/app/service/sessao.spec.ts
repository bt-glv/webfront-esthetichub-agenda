import { TestBed } from '@angular/core/testing';

import { Sessao } from './sessao';

describe('Sessao', () => {
  let service: Sessao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sessao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
