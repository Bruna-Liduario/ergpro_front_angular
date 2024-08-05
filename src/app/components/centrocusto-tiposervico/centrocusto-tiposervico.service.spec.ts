import { TestBed } from '@angular/core/testing';

import { CentrocustoTiposervicoService } from './centrocusto-tiposervico.service';

describe('CentrocustoTiposervicoService', () => {
  let service: CentrocustoTiposervicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrocustoTiposervicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
