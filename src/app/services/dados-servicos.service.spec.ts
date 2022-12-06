import { TestBed } from '@angular/core/testing';

import { DadosServicosService } from './dados-servicos.service';

describe('DadosServicosService', () => {
  let service: DadosServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
