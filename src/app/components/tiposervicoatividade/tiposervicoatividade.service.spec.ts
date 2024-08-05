import { TestBed } from '@angular/core/testing';

import { TiposervicoatividadeService } from './tiposervicoatividade.service';

describe('TiposervicoatividadeService', () => {
  let service: TiposervicoatividadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposervicoatividadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
