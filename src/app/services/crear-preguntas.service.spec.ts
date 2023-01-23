import { TestBed } from '@angular/core/testing';

import { CrearPreguntasService } from './crear-preguntas.service';

describe('CrearPreguntasService', () => {
  let service: CrearPreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
