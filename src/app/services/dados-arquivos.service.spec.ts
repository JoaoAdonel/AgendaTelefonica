import { TestBed } from '@angular/core/testing';

import { DadosArquivosService } from './dados-arquivos.service';

describe('DadosArquivosService', () => {
  let service: DadosArquivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosArquivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
