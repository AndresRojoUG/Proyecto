import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPreguntasComponent } from './actualizar-preguntas.component';

describe('ActualizarPreguntasComponent', () => {
  let component: ActualizarPreguntasComponent;
  let fixture: ComponentFixture<ActualizarPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
